using System;
using System.Collections;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using Spagme.Js;
using Spagme.Test.Tests;

namespace Spagme.Test
{
    public class JsTestGenerator
    {
        private readonly string _dir;
        private readonly string _testdir;
        private readonly string _url;
        private readonly JsModule _module;

        public JsTestGenerator(JsModule module, string dir, string url)
        {
            _module = module;
            _dir = dir;
            _testdir = dir + "/tests";
            _url = url;
        }

        public void Generate()
        {
            Clean();
            GenerateApi();
            GenerateTests();
        }

        public void Clean()
        {
            if (!Directory.Exists(_dir)) throw new Exception("Cant read directory " + _dir);

            if (Directory.Exists(_testdir))
            {
                Directory.Delete(_testdir, true);
                Directory.CreateDirectory(_testdir);
            }
            if (!Directory.Exists(_testdir))
            {
                Directory.CreateDirectory(_testdir);
            }
        }

        public void GenerateApi()
        {

            var assembly = typeof(ITest).Assembly;
            foreach (var type in assembly.DefinedTypes.Where(o => o.ImplementedInterfaces.Contains(typeof(ITest))))
            {
                try
                {
                    var fullname = type.FullName.ToLower();
                    var dirname = _testdir + "/" + fullname;
                    Directory.CreateDirectory(dirname);
                    var str = SpagmeGen.Js(type, new JsGenOptions()
                    {
                        ApiClassName = "Api",
                        ApiName = "api",
                        DisableLint = false,
                        Module = _module
                    });
                    File.WriteAllText(dirname + "/api.js", str);

                }
                catch (Exception exc)
                {
                    throw new Exception(type.FullName, exc);
                }
            }
        }

        public void GenerateTests()
        {

            var assembly = typeof(ITest).Assembly;
            foreach (var type in assembly.DefinedTypes.Where(o => o.ImplementedInterfaces.Contains(typeof(ITest))))
            {
                var fullname = type.FullName.ToLower();
                var dirname = _testdir + "/" + fullname;

                var code = new StringBuilder();
                if (_module == JsModule.Es6)
                {
                    code.AppendLine("import * as api1 from './api.js';");
                    code.AppendLine("import { default as api2 } from './api.js';");
                    code.AppendLine("// eslint-disable-next-line");
                    code.AppendLine("import { diff } from 'deep-object-diff';");
                    code.AppendLine();
                    code.AppendLine("const api = {...api1, ...api2 };");
                }
                else
                {
                    code.AppendLine("const { api } = require('./api.js');");
                    code.AppendLine("const { diff } = require('deep-object-diff');");
                }
                code.AppendLine();
                code.AppendLine("const tests = [];");
                code.AppendLine();

                foreach (var m in ReflectionUtil.GetMethods(type))
                {
                    code.Append(GenerateTests(m, fullname));
                }

                if (_module == JsModule.Es6)
                {
                    code.AppendLine("export default tests;");
                }
                else
                {
                    code.AppendLine("module.exports = tests;");
                }

                File.WriteAllText(dirname + "/tests.js", code.ToString());
            }

            var tmp = new StringBuilder();

            int count = 1;
            foreach (var type in assembly.DefinedTypes.Where(o => o.ImplementedInterfaces.Contains(typeof(ITest))))
            {
                var fullname = type.FullName.ToLower();
                if (_module == JsModule.Es6)
                {
                    tmp.AppendLine($"import t{count} from './{fullname}/tests.js';");
                }
                else
                {
                    tmp.AppendLine($"const t{count} = require('./{fullname}/tests.js');");
                }

                count++;
            }

            tmp.AppendLine("const tests  = [");
            for (int i = 1; i < count; i++)
            {
                tmp.AppendLine($"...t{i},");
            }
            tmp.AppendLine("];");
            if (_module == JsModule.Es6)
            {
                tmp.AppendLine("export default tests;");
            }
            else
            {
                tmp.AppendLine("module.exports = tests;");
            }

            File.WriteAllText(_testdir + "/tests.js", tmp.ToString());
        }

        public string GenerateTests(MethodInfo methodInfo, string fullname)
        {
            var code = new StringBuilder();

            code.Append(GenerateTest(methodInfo, fullname, "default", Default, "post"));
            code.Append(GenerateTest(methodInfo, fullname, "default", Default, "get"));
            code.Append(GenerateTest(methodInfo, fullname, "nullable", Nullable, "post"));
            code.Append(GenerateTest(methodInfo, fullname, "nullable", Nullable, "get"));
            code.Append(GenerateTest(methodInfo, fullname, "min", Min, "post"));
            code.Append(GenerateTest(methodInfo, fullname, "min", Min, "get"));
            code.Append(GenerateTest(methodInfo, fullname, "max", Max, "post"));
            code.Append(GenerateTest(methodInfo, fullname, "max", Max, "get"));

            return code.ToString();
        }

        public string GenerateTest(MethodInfo methodInfo, string fullname, string testname, Func<Type,int,string> gen, string method)
        {
            var code = new StringBuilder();

            code.AppendLine("//" + ReflectionUtil.ToCamelCase(methodInfo.Name));
            code.AppendLine("tests.push(");
            code.AppendLine(Intedent(1) + "{");

            code.AppendLine(Intedent(2) + $"name: '{fullname}/{ReflectionUtil.ToCamelCase(methodInfo.Name)}/{testname}/{method}',");

            code.AppendLine(Intedent(2) + $"status: 'NONE',");

            code.AppendLine(Intedent(2) + "execute: async (me, url) => {");

            code.AppendLine(Intedent(3) + "try {");

            var output = ReflectionUtil.GetOutputType(methodInfo);
            var input = ReflectionUtil.GetInputTypes(methodInfo).First().Item2;

            if (ReflectionUtil.IsPrimitive(output) || output.IsEnum || (System.Nullable.GetUnderlyingType(output) != null && System.Nullable.GetUnderlyingType(output).IsEnum))
            {
                code.AppendLine(Intedent(4) + $"const input = {gen.Invoke(input, 0)};");
                code.AppendLine(Intedent(4) + "me.input = input; ");
                code.AppendLine(Intedent(4) + $"api.api.url = url + '/{fullname}';");
                code.AppendLine(Intedent(4) + $"const output = await api.{ReflectionUtil.ToCamelCase(methodInfo.Name)}(input, '{method}');  ");
                code.AppendLine(Intedent(4) + "me.output = output;");
                code.AppendLine(Intedent(4) + "me.status = 'ERROR';");
                code.AppendLine(Intedent(4) + "if(JSON.stringify(input) === JSON.stringify(output)) me.status = 'SUCCESS';");
            }
            else
            {
                code.AppendLine(Intedent(4) + $"const input = {gen.Invoke(input, 0)};");
                code.AppendLine(Intedent(4) + "me.input = {...input}; ");
                code.AppendLine(Intedent(4) + $"api.api.url = url + '/{fullname}';");
                code.AppendLine(Intedent(4) + $"const output = await api.{ReflectionUtil.ToCamelCase(methodInfo.Name)}(input, '{method}');  ");
                code.AppendLine(Intedent(4) + "me.output = {...output};");
                code.AppendLine(Intedent(4) + "me.status = 'ERROR';");
                code.AppendLine(Intedent(4) + "if(Object.keys(diff(input, output)).length === 0) me.status = 'SUCCESS';");
            }

            code.AppendLine(Intedent(4) + "return Promise.resolve(undefined);");

            code.AppendLine(Intedent(3) + "}");
            code.AppendLine(Intedent(3) + "catch(e) {");

            code.AppendLine(Intedent(4) + "console.log(e);");
            code.AppendLine(Intedent(4) + "me.status = 'ERROR';");
            code.AppendLine(Intedent(4) + "me.error = {...e};");
            code.AppendLine(Intedent(4) + "return Promise.resolve(undefined);");

            code.AppendLine(Intedent(3) + "}");

            code.AppendLine(Intedent(2) + "},");

            code.AppendLine(Intedent(1) + "}");
            code.AppendLine(")");

            return code.ToString();
        }

        public string GetInputType(Type t)
        {
            if (t == typeof(string)) return "string";
            if (t == typeof(bool)) return "boolean";
            if (t == typeof(byte)) return "number";
            if (t == typeof(sbyte)) return "number";
            if (t == typeof(char)) return "string";
            if (t == typeof(decimal)) return "number";
            if (t == typeof(double)) return "number";
            if (t == typeof(float)) return "number";
            if (t == typeof(int)) return "number";
            if (t == typeof(uint)) return "number";
            if (t == typeof(long)) return "number";
            if (t == typeof(ulong)) return "number";
            if (t == typeof(short)) return "number";
            if (t == typeof(ushort)) return "number";
            if (t == typeof(DateTime)) return "Date";
            if (t == typeof(bool?)) return "boolean";
            if (t == typeof(byte?)) return "number";
            if (t == typeof(sbyte?)) return "number";
            if (t == typeof(char?)) return "string";
            if (t == typeof(decimal?)) return "number";
            if (t == typeof(double?)) return "number";
            if (t == typeof(float?)) return "number";
            if (t == typeof(int?)) return "number";
            if (t == typeof(uint?)) return "number";
            if (t == typeof(long?)) return "number";
            if (t == typeof(ulong?)) return "number";
            if (t == typeof(short?)) return "number";
            if (t == typeof(ushort?)) return "number";
            if (t == typeof(DateTime?)) return "Date";

            if (t.IsEnum)
            {
                return "api." + t.Name;
            }
            if (System.Nullable.GetUnderlyingType(t) != null && System.Nullable.GetUnderlyingType(t).IsEnum)
            {
                return "api." + System.Nullable.GetUnderlyingType(t).Name;
            }

            //Array
            if (t.IsArray)
            {
                return "Array<" + GetInputType(t.GetElementType()) + Null(t.GetElementType()) + ">";
            }

            if (t.GenericTypeArguments.Length == 1 && t.GetInterfaces().Contains(typeof(IEnumerable)))
            {
                return "Array<" + GetInputType(t.GenericTypeArguments[0]) + Null(t.GenericTypeArguments[0]) + ">";
                
            }

            return "api." + t.Name;
        }

        public string Default(Type type, int depth)
        {
            if (type == typeof(string)) return "'abcdefghijklmnopqrstuvWxyz'";
            if (type == typeof(bool)) return "true";
            if (type == typeof(byte)) return "1";
            if (type == typeof(sbyte)) return "2";
            if (type == typeof(char)) return "'A'";
            if (type == typeof(decimal)) return "3";
            if (type == typeof(double)) return "4";
            if (type == typeof(float)) return "5";
            if (type == typeof(int)) return "6";
            if (type == typeof(uint)) return "7";
            if (type == typeof(long)) return "8";
            if (type == typeof(ulong)) return "9";
            if (type == typeof(short)) return "10";
            if (type == typeof(ushort)) return "11";
            if (type == typeof(DateTime)) return "new Date(2011,10,11)";
            //Nullable
            if (type == typeof(bool?)) return "true";
            if (type == typeof(byte?)) return "1";
            if (type == typeof(sbyte?)) return "2";
            if (type == typeof(char?)) return "'A'";
            if (type == typeof(decimal?)) return "3";
            if (type == typeof(double?)) return "4";
            if (type == typeof(float?)) return "5";
            if (type == typeof(int?)) return "6";
            if (type == typeof(uint?)) return "7";
            if (type == typeof(long?)) return "8";
            if (type == typeof(ulong?)) return "9";
            if (type == typeof(short?)) return "10";
            if (type == typeof(ushort?)) return "11";
            if (type == typeof(DateTime?)) return "new Date(2011,10,11)";
            if (type.IsEnum)
            {
                return "api." + type.Name + "." + Enum.GetValues(type).GetValue(0);
            }
            if (System.Nullable.GetUnderlyingType(type) != null && System.Nullable.GetUnderlyingType(type).IsEnum)
            {
                return "api." + System.Nullable.GetUnderlyingType(type).Name + "." + Enum.GetValues(System.Nullable.GetUnderlyingType(type)).GetValue(0);
            }

            return Object(type, Default, depth+1);
        }

        public string Min(Type type, int depth)
        {
            if (type == typeof(string)) return "''";
            if (type == typeof(bool)) return "false";
            if (type == typeof(byte)) return $"{byte.MinValue}";
            if (type == typeof(sbyte)) return $"{sbyte.MinValue}";
            if (type == typeof(char)) return "'A'";
            if (type == typeof(decimal)) return $"{decimal.MinValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(double)) return $"{double.MinValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(float)) return $"{float.MinValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(int)) return $"{int.MinValue}";
            if (type == typeof(uint)) return $"{uint.MinValue}";
            if (type == typeof(long)) return $"Number.MIN_SAFE_INTEGER";
            if (type == typeof(ulong)) return $"{ulong.MinValue}";
            if (type == typeof(short)) return $"{short.MinValue}";
            if (type == typeof(ushort)) return $"{ushort.MinValue}";
            if (type == typeof(DateTime)) return $"new Date(1,0,1)";
            //Nullable
            if (type == typeof(bool?)) return "true";
            if (type == typeof(bool?)) return "false";
            if (type == typeof(byte?)) return $"{byte.MinValue}";
            if (type == typeof(sbyte?)) return $"{sbyte.MinValue}";
            if (type == typeof(char?)) return "'A'";
            if (type == typeof(decimal?)) return $"{decimal.MinValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(double?)) return $"{double.MinValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(float?)) return $"{float.MinValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(int?)) return $"{int.MinValue}";
            if (type == typeof(uint?)) return $"{uint.MinValue}";
            if (type == typeof(long?)) return $"Number.MIN_SAFE_INTEGER";
            if (type == typeof(ulong?)) return $"{ulong.MinValue}";
            if (type == typeof(short?)) return $"{short.MinValue}";
            if (type == typeof(ushort?)) return $"{ushort.MinValue}";
            if (type == typeof(DateTime?)) return $"new Date(1,0,1)";
            if (type.IsEnum)
            {
                return "api." + type.Name + "." + Enum.GetValues(type).GetValue(0);
            }
            if (System.Nullable.GetUnderlyingType(type) != null && System.Nullable.GetUnderlyingType(type).IsEnum)
            {
                return "api." + System.Nullable.GetUnderlyingType(type).Name + "." + Enum.GetValues(System.Nullable.GetUnderlyingType(type)).GetValue(0);
            }

            return Object(type, Min, depth + 1);
        }

        public string Max(Type type, int depth)
        {
            if (type == typeof(string)) return Default(type, depth);
            if (type == typeof(bool)) return "false";
            if (type == typeof(byte)) return $"{byte.MaxValue}";
            if (type == typeof(sbyte)) return $"{sbyte.MaxValue}";
            if (type == typeof(char)) return "'A'";
            if (type == typeof(decimal)) return $"{decimal.MaxValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(double)) return $"{double.MaxValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(float)) return $"{float.MaxValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(int)) return $"{int.MaxValue}";
            if (type == typeof(uint)) return $"{uint.MaxValue}";
            if (type == typeof(long)) return $"Number.MAX_SAFE_INTEGER";
            if (type == typeof(ulong)) return $"Number.MAX_SAFE_INTEGER";
            if (type == typeof(short)) return $"{short.MaxValue}";
            if (type == typeof(ushort)) return $"{ushort.MaxValue}";
            if (type == typeof(DateTime)) return $"new Date(9999,11,31)";
            //Nullable
            if (type == typeof(bool?)) return "true";
            if (type == typeof(bool?)) return "false";
            if (type == typeof(byte?)) return $"{byte.MaxValue}";
            if (type == typeof(sbyte?)) return $"{sbyte.MaxValue}";
            if (type == typeof(char?)) return "'A'";
            if (type == typeof(decimal?)) return $"{decimal.MaxValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(double?)) return $"{double.MaxValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(float?)) return $"{float.MaxValue.ToString("E", CultureInfo.InvariantCulture)}";
            if (type == typeof(int?)) return $"{int.MaxValue}";
            if (type == typeof(uint?)) return $"{uint.MaxValue}";
            if (type == typeof(long?)) return $"Number.MAX_SAFE_INTEGER";
            if (type == typeof(ulong?)) return $"Number.MAX_SAFE_INTEGER";
            if (type == typeof(short?)) return $"{short.MaxValue}";
            if (type == typeof(ushort?)) return $"{ushort.MaxValue}";
            if (type == typeof(DateTime?)) return $"new Date(9999,11,31)";
            if (type.IsEnum)
            {
                return "api." + type.Name + "." + Enum.GetValues(type).GetValue(Enum.GetValues(type).Length-1);
            }
            if (System.Nullable.GetUnderlyingType(type) != null && System.Nullable.GetUnderlyingType(type).IsEnum)
            {
                return "api." + System.Nullable.GetUnderlyingType(type).Name + "." + Enum.GetValues(System.Nullable.GetUnderlyingType(type)).GetValue(Enum.GetValues(System.Nullable.GetUnderlyingType(type)).Length-1);
            }

            return Object(type, Max, depth + 1);
        }

        public string Nullable(Type type, int depth)
        {
            if (type == typeof(string)) return "null";
            if (type == typeof(bool)) return "true";
            if (type == typeof(byte)) return "1";
            if (type == typeof(sbyte)) return "2";
            if (type == typeof(char)) return "'A'";
            if (type == typeof(decimal)) return "3";
            if (type == typeof(double)) return "4";
            if (type == typeof(float)) return "5";
            if (type == typeof(int)) return "6";
            if (type == typeof(uint)) return "7";
            if (type == typeof(long)) return "8";
            if (type == typeof(ulong)) return "9";
            if (type == typeof(short)) return "10";
            if (type == typeof(ushort)) return "11";
            if (type == typeof(DateTime)) return "new Date(2011,10,11)";
            //Nullable
            if (type == typeof(bool?)) return "null";
            if (type == typeof(byte?)) return "null";
            if (type == typeof(sbyte?)) return "null";
            if (type == typeof(char?)) return "null";
            if (type == typeof(decimal?)) return "null";
            if (type == typeof(double?)) return "null";
            if (type == typeof(float?)) return "null";
            if (type == typeof(int?)) return "null";
            if (type == typeof(uint?)) return "null";
            if (type == typeof(long?)) return "null";
            if (type == typeof(ulong?)) return "null";
            if (type == typeof(short?)) return "null";
            if (type == typeof(ushort?)) return "null";
            if (type == typeof(DateTime?)) return "null";
            if (type.IsEnum)
            {
                return "api." + type.Name + "." + Enum.GetValues(type).GetValue(0);
            }
            if (System.Nullable.GetUnderlyingType(type) != null && System.Nullable.GetUnderlyingType(type).IsEnum)
            {
                return "null";
            }
            if (depth == 0)
            {
                return Object(type, Nullable, depth + 1);
            }
            return "null";
        }

        public string Object(Type t, Func<Type, int, string> gen, int depth)
        {
            if (depth > 5) return "";

            var ret = new StringBuilder();

            if (t.IsArray)
            {
                ret.Append("[");
                for (var i = 0; i < 3; i++)
                {
                    if (i != 0) ret.Append(",");
                    ret.Append(gen(t.GetElementType(), depth));
                }
                ret.Append("]");
            }
            else if (t.GenericTypeArguments.Length == 1 && t.GetInterfaces().Contains(typeof(IEnumerable)))
            {
                ret.Append("[");
                for (var i = 0; i < 3; i++)
                {
                    if (i != 0) ret.Append(",");
                    ret.Append(gen(t.GenericTypeArguments[0], depth));
                }
                ret.Append("]");
            }
            else
            {
                ret.Append("{");

                //Generate properties
                foreach (var prop in t.GetProperties(BindingFlags.Public | BindingFlags.Instance))
                {
                    var a = gen.Invoke(prop.PropertyType, depth);
                    if (a == "") a = "null";
                    ret.Append($"{ToCamelCase(prop.Name)}: {a}, ");
                }

                ret.Append("}");
            }

            return ret.ToString();
        }

        private string Intedent(int count)
        {
            var ret = new StringBuilder();

            for (var i = 0; i < count; i++)
            {
                ret.Append("  ");
            }

            return ret.ToString();
        }

        private string ToCamelCase(string str)
        {
            if (str?.Length > 1) return char.ToLowerInvariant(str[0]) + str.Substring(1);
            return str;
        }

        private bool IsNullable(Type type)
        {
            if (type == typeof(bool)) return false;
            if (type == typeof(byte)) return false;
            if (type == typeof(sbyte)) return false;
            if (type == typeof(char)) return false;
            if (type == typeof(decimal)) return false;
            if (type == typeof(double)) return false;
            if (type == typeof(float)) return false;
            if (type == typeof(int)) return false;
            if (type == typeof(uint)) return false;
            if (type == typeof(long)) return false;
            if (type == typeof(ulong)) return false;
            if (type == typeof(short)) return false;
            if (type == typeof(ushort)) return false;
            if (type == typeof(DateTime)) return false;
            if (type.IsEnum) return false;
            return true;
        }

        private string Null(Type type)
        {
            if (IsNullable(type)) return " | null";
            return "";
        }
    }
}
