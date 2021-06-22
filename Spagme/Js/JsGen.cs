using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Spagme.Js
{
    /// <summary>
    /// Generates .js client files
    /// </summary>
    public class JsGen
    {
        /// <summary>
        /// Options
        /// </summary>
        private readonly JsGenOptions _options;

        /// <summary>
        /// Semicolon
        /// </summary>
        private string Sc => _options.Semicolon ? ";" : "";

        /// <summary>
        /// Api service type
        /// </summary>
        private readonly Type _type;

        public JsGen(Type type, JsGenOptions options = null)
        {
            _type = type;
            _options = options ?? new JsGenOptions();
        }

        /// <summary>
        /// Generates .js client files
        /// </summary>
        /// <returns></returns>
        public string Generate()
        {
            //File content
            var content = new StringBuilder();

            //Get all methods
            var methodInfos = ReflectionUtil.GetMethods(_type);

            //Get all types that is used in all methods
            var types = ReflectionUtil.GetTypes(methodInfos);

            //Disable lint in top of file?
            if (_options.DisableLint)
            {
                content.AppendLine("/* eslint-disable */");
            }

            //Exports 
            var exports = new StringBuilder();

            //Different kind of exports depending which module system used
            if (_options.Module == JsModule.Require)
            {
                exports.AppendLine($"const {_options.ApiName} = new {_options.ApiClassName}()" + Sc);
                exports.AppendLine($"module.exports = {_options.ApiName}" + Sc);
                exports.AppendLine($"module.exports.{_options.ApiName} = {_options.ApiName}" + Sc);
                exports.AppendLine($"module.exports.{_options.ApiClassName} = {_options.ApiClassName}" + Sc);
            }
            else
            {
                exports.AppendLine($"export const {_options.ApiName} = new {_options.ApiClassName}()" + Sc);
                exports.AppendLine($"export default {_options.ApiName}" + Sc);
            }

            //Generate js object for each type
            foreach (var type in types)
            {
                content.Append(GenerateJsObject(type, exports));
            }

            //Generate api
            content.Append(GenerateJsClass(methodInfos));

            //Exports goes at the end of the file
            content.Append(exports);

            return content.ToString();
        }

        /// <summary>
        /// Generate js object for a type
        /// </summary>
        /// <param name="t"></param>
        /// <param name="exports"></param>
        /// <returns></returns>
        private string GenerateJsObject(Type t, StringBuilder exports)
        {
            //If it is a primitive no object should be generated
            if (ReflectionUtil.IsPrimitive(t)) return "";

            var ret = new StringBuilder();

            //Enum
            if (t.IsEnum)
            {
                if (_options.Module == JsModule.Require)
                {
                    ret.AppendLine(Intedent(0) + $"const {t.Name} = {{");
                }
                else
                {
                    ret.AppendLine(Intedent(0) + $"export const {t.Name} = {{");
                }
                foreach (var e in Enum.GetValues(t))
                {
                    ret.AppendLine(Intedent(1) + $"{e}: {Convert.ChangeType(e, Enum.GetUnderlyingType(t))},");
                }
                ret.AppendLine(Intedent(0) + $"}}");
                ret.AppendLine();
                if (_options.Module == JsModule.Require)
                {
                    exports.AppendLine(Intedent(0) + $"module.exports.{t.Name} = {t.Name}" + Sc);
                }
                return ret.ToString();
            }

            //Empty object
            if (t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly).Length == 0)
            {
                if (t.BaseType == null || t.BaseType.Name == "Object")
                {
                    if (_options.Module == JsModule.Require)
                    {
                        ret.AppendLine(Intedent(0) + $"class {t.Name} {{}}");
                        exports.AppendLine(Intedent(0) + $"module.exports.{t.Name} = {t.Name}" + Sc);
                    }
                    else
                    {
                        ret.AppendLine(Intedent(0) + $"export class {t.Name} {{}}");
                    }
                }
                else
                {
                    ret.AppendLine(Intedent(0) + $"export class {t.Name} extends {GetTypeName(t.BaseType)} {{}}");

                    if (_options.Module == JsModule.Require)
                    {
                        exports.AppendLine(Intedent(0) + $"module.exports.{t.Name} = {t.Name}" + Sc);
                    }
                }
                return ret.ToString();
            }

            //Class
            if (t.BaseType == null || t.BaseType.Name == "Object")
            {
                if (_options.Module == JsModule.Require)
                {
                    ret.AppendLine(Intedent(0) + $"class {t.Name} {{");
                }
                else
                {
                    ret.AppendLine(Intedent(0) + $"export class {t.Name} {{");
                }
            }
            else
            {
                if (_options.Module == JsModule.Require)
                {
                    ret.AppendLine(Intedent(0) + $"class {t.Name} extends {GetTypeName(t.BaseType)} {{");
                }
                else
                {
                    ret.AppendLine(Intedent(0) + $"export class {t.Name} extends {GetTypeName(t.BaseType)} {{");
                }
            }

            //Generate properties for class
            foreach (var prop in t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
            {
                ret.AppendLine(Intedent(1) + $"{ReflectionUtil.ToCamelCase(prop.Name)}" + Sc);
            }

            //Generate comments and constructor
            ret.AppendLine(Intedent(1) + "/**");
            foreach (var prop in t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
            {
                if (prop.PropertyType.IsEnum || prop.PropertyType.BaseType?.IsEnum == true)
                {
                    ret.AppendLine(Intedent(1) + $"* @param {{number}} {ReflectionUtil.ToCamelCase(prop.Name)}");
                }
                else
                {
                    ret.AppendLine(Intedent(1) + $"* @param {{{GetTypeName(prop.PropertyType)}}} {ReflectionUtil.ToCamelCase(prop.Name)}");
                }
            }
            ret.AppendLine(Intedent(1) + "*/");
            var comma = false;
            ret.Append(Intedent(1) + "constructor(");
            foreach (var prop in t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
            {
                if (comma) ret.Append(", ");
                comma = true;
                ret.Append($"{ReflectionUtil.ToCamelCase(prop.Name)}");
            }
            ret.AppendLine(") {");
            if (!(t.BaseType == null || t.BaseType.Name == "Object"))
            {
                ret.AppendLine(Intedent(2) + "super()" + Sc);
            }

            foreach (var prop in t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
            {
                ret.AppendLine(Intedent(2) + $"this.{ReflectionUtil.ToCamelCase(prop.Name)} = {ReflectionUtil.ToCamelCase(prop.Name)}" + Sc);
            }
            ret.AppendLine(Intedent(1) + $"}}");

            ret.AppendLine(Intedent(0) + $"}}");

            //Exports
            if (_options.Module == JsModule.Require)
            {
                exports.AppendLine(Intedent(0) + $"module.exports.{t.Name} = {t.Name}" + Sc);
            }
            ret.AppendLine();
            return ret.ToString();
        }

        /// <summary>
        /// Generates js api class
        /// </summary>
        /// <param name="methods"></param>
        /// <returns></returns>
        private string GenerateJsClass(List<MethodInfo> methods)
        {
            var ret = new StringBuilder();

            //Exports
            if (_options.Module == JsModule.Require)
            {
                ret.AppendLine(Intedent(0) + $"class {_options.ApiClassName} {{");
            }
            else
            {
                ret.AppendLine(Intedent(0) + $"export class {_options.ApiClassName} {{");
            }

            //url, init and revive
            ret.AppendLine(Intedent(1) +   $"url= \"{this._options.Url}\"" + Sc);
            ret.AppendLine(Intedent(1) +   $"init= {{}}" + Sc);
            ret.AppendLine(Intedent(1) +   "revive = (key, value) => {");
            ret.AppendLine(Intedent(2) +    "if (value !== null && value !== undefined) {");
            ret.AppendLine(Intedent(3) +      "if(/\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\\d|3[0-1])T(?:[0-1]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+|)(?:Z|(?:\\+|-)(?:\\d{2}):?(?:\\d{2}))/.exec(value)) {");
            ret.AppendLine(Intedent(4) +        "return new Date(value)" + Sc);
            ret.AppendLine(Intedent(3) +      "}");
            ret.AppendLine(Intedent(2) +    "}");
            ret.AppendLine(Intedent(2) +   "return value" + Sc);
            ret.AppendLine(Intedent(1) +   "}" + Sc);

            //post and get helper
            ret.AppendLine(Intedent(1) + Intedent("post = (url, data) => {"));
            ret.AppendLine(Intedent(1) + Intedent("  return new Promise( (resolve, reject) => {"));
            ret.AppendLine(Intedent(1) + Intedent("    let formData = new FormData()") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      formData.append(key, data[key])"));
            ret.AppendLine(Intedent(1) + Intedent("    })") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    fetch(url, {"));
            ret.AppendLine(Intedent(1) + Intedent("      ...this.init,"));
            ret.AppendLine(Intedent(1) + Intedent("      method: 'post',"));
            ret.AppendLine(Intedent(1) + Intedent("      body: formData,"));
            ret.AppendLine(Intedent(1) + Intedent("    }).then((resp) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      if(resp.ok) {"));
            ret.AppendLine(Intedent(1) + Intedent("        resp.text().then((txt)=> {"));
            ret.AppendLine(Intedent(1) + Intedent("          const output = JSON.parse(txt, this.revive)") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("          resolve(output)") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("        })") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("      }"));
            ret.AppendLine(Intedent(1) + Intedent("      else {"));
            ret.AppendLine(Intedent(1) + Intedent("        reject({status: resp.status, statusText: resp.statusText, reason: null})") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("      }"));
            ret.AppendLine(Intedent(1) + Intedent("    }).catch((e) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      reject({status: null, statusText: null, reason: '' + e})") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    })"));
            ret.AppendLine(Intedent(1) + Intedent("  })") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("}" + Sc));
            ret.AppendLine(Intedent(1) + Intedent("get = (url, data) => {"));
            ret.AppendLine(Intedent(1) + Intedent("  return new Promise( (resolve, reject) => {"));
            ret.AppendLine(Intedent(1) + Intedent("    const u = new URL(url)") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      u.searchParams.append(key, data[key])"));
            ret.AppendLine(Intedent(1) + Intedent("    })") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    fetch(u.toString(), {"));
            ret.AppendLine(Intedent(1) + Intedent("      ...this.init,"));
            ret.AppendLine(Intedent(1) + Intedent("      method: 'get'"));
            ret.AppendLine(Intedent(1) + Intedent("    }).then((resp) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      if(resp.ok) {"));
            ret.AppendLine(Intedent(1) + Intedent("        resp.text().then((txt)=> {"));
            ret.AppendLine(Intedent(1) + Intedent("        const output = JSON.parse(txt, this.revive)") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("          resolve(output)") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("        })") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("      }"));
            ret.AppendLine(Intedent(1) + Intedent("      else {"));
            ret.AppendLine(Intedent(1) + Intedent("        reject({status: resp.status, statusText: resp.statusText, reason: null})") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("      }"));
            ret.AppendLine(Intedent(1) + Intedent("    }).catch((e) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      reject({status: null, statusText: null, reason: '' + e})") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    })"));
            ret.AppendLine(Intedent(1) + Intedent("  })") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("}" + Sc));

            //post and get helper when no return object
            if (methods.Any(o => ReflectionUtil.GetOutputType(o) == null))
            {
                ret.AppendLine(Intedent(1) + Intedent("postEmpty = (url, data) =>  {"));
                ret.AppendLine(Intedent(1) + Intedent("  return new Promise( (resolve, reject) => {"));
                ret.AppendLine(Intedent(1) + Intedent("    let formData = new FormData()") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      formData.append(key, data[key])"));
                ret.AppendLine(Intedent(1) + Intedent("    })") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    fetch(url, {"));
                ret.AppendLine(Intedent(1) + Intedent("      ...this.init,"));
                ret.AppendLine(Intedent(1) + Intedent("      method: 'post',"));
                ret.AppendLine(Intedent(1) + Intedent("      body: formData,"));
                ret.AppendLine(Intedent(1) + Intedent("    }).then((resp) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      if(resp.ok) {"));
                ret.AppendLine(Intedent(1) + Intedent("        if(resp.ok) {"));
                ret.AppendLine(Intedent(1) + Intedent("          resolve(undefined)") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("        }"));
                ret.AppendLine(Intedent(1) + Intedent("      }"));
                ret.AppendLine(Intedent(1) + Intedent("      else {"));
                ret.AppendLine(Intedent(1) + Intedent("        reject({status: resp.status, statusText: resp.statusText, reason: null})") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("      }"));
                ret.AppendLine(Intedent(1) + Intedent("    }).catch((e) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      reject({status: null, statusText: null, reason: '' + e})") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    })"));
                ret.AppendLine(Intedent(1) + Intedent("  })") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("}" + Sc));
                ret.AppendLine(Intedent(1) + Intedent("getEmpty = (url, data) =>  {"));
                ret.AppendLine(Intedent(1) + Intedent("  return new Promise( (resolve, reject) => {"));
                ret.AppendLine(Intedent(1) + Intedent("    let u = new URL(url)") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      u.searchParams.append(key, data[key])"));
                ret.AppendLine(Intedent(1) + Intedent("    })") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    fetch(u.toString(), {"));
                ret.AppendLine(Intedent(1) + Intedent("      ...this.init,"));
                ret.AppendLine(Intedent(1) + Intedent("      method: 'get'"));
                ret.AppendLine(Intedent(1) + Intedent("    }).then((resp) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      if(resp.ok) {"));
                ret.AppendLine(Intedent(1) + Intedent("        resolve(undefined)") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("      }"));
                ret.AppendLine(Intedent(1) + Intedent("      else {"));
                ret.AppendLine(Intedent(1) + Intedent("        reject({status: resp.status, statusText: resp.statusText, reason: null})") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("      }"));
                ret.AppendLine(Intedent(1) + Intedent("    }).catch((e) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      reject({status: null, statusText: null, reason: '' + e})") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    })"));
                ret.AppendLine(Intedent(1) + Intedent("  })") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("}" + Sc));

            }

            //Generate api methods
            foreach (var m in methods)
            {
                var output = ReflectionUtil.GetOutputType(m);
                var input = ReflectionUtil.GetInputTypes(m);

                //Output
                if (output != null)
                {
                    ret.AppendLine(Intedent(1) + "/**");
                    foreach (var t in input)
                    {
                        if (t.Item2.IsEnum)
                        {
                            ret.AppendLine(Intedent(1) + $"* @param {{number}} {ReflectionUtil.ToCamelCase(t.Item1)}");
                        }
                        else
                        {
                            ret.AppendLine(Intedent(1) + $"* @param {{{GetTypeName(t.Item2)}}} {ReflectionUtil.ToCamelCase(t.Item1)}");
                        }
                    }
                    ret.AppendLine(Intedent(1) + $"* @param {{string}} method 'get' or 'post'");
                    ret.AppendLine(Intedent(1) + $"* @returns {{Promise<{GetTypeName(output)}>}}");
                    ret.AppendLine(Intedent(1) + "*/");
                    ret.Append(Intedent(1) + $"{ReflectionUtil.ToCamelCase(m.Name)} = (");
                    var appendComma = false;
                    foreach (var (name, type) in input)
                    {
                        if (appendComma)
                        {
                            ret.Append(", ");
                        }
                        appendComma = true;
                        ret.Append($"{ReflectionUtil.ToCamelCase(name)}");
                    }
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    ret.Append("method = 'post'");
                    ret.AppendLine($") => {{");
                    ret.AppendLine(Intedent(2) + $"const data = {{}}" + Sc);
                    foreach (var (name, type) in input)
                    {
                        ret.AppendLine(Intedent(2) + $"data.{ReflectionUtil.ToCamelCase(name)} = JSON.stringify({ReflectionUtil.ToCamelCase(name)})" + Sc);
                    }
                    ret.AppendLine(Intedent(2) + $"if(method === 'get') return this.get(`${{this.url}}/{ReflectionUtil.ToCamelCase(m.Name)}`, data)" + Sc);
                    ret.AppendLine(Intedent(2) + $"return this.post(`${{this.url}}/{ReflectionUtil.ToCamelCase(m.Name)}`, data)" + Sc);
                    ret.AppendLine(Intedent(1) + $"}}");
                }

                //No output
                if (output == null)
                {
                    ret.AppendLine(Intedent(1) + "/**");
                    foreach (var t in input)
                    {
                        if (t.Item2.IsEnum)
                        {
                            ret.AppendLine(Intedent(1) + $"* @param {{number}} {ReflectionUtil.ToCamelCase(t.Item1)}");
                        }
                        else
                        {
                            ret.AppendLine(Intedent(1) + $"* @param {{{GetTypeName(t.Item2)}}} {ReflectionUtil.ToCamelCase(t.Item1)}");
                        }
                    }
                    ret.AppendLine(Intedent(1) + $"* @param {{string}} method 'get' or 'post'. default is post");
                    ret.AppendLine(Intedent(1) + $"* @returns {{Promise<void>}}");
                    ret.AppendLine(Intedent(1) + "*/");
                    ret.Append(Intedent(1) + $"{ReflectionUtil.ToCamelCase(m.Name)}= (");
                    var appendComma = false;
                    foreach (var (name, type) in input)
                    {
                        if (appendComma)
                        {
                            ret.Append(", ");
                        }
                        appendComma = true;
                        ret.Append($"{ReflectionUtil.ToCamelCase(name)}");
                    }
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    ret.Append("method = 'post'");
                    ret.Append(") ");
                    ret.AppendLine($" => {{");
                    ret.AppendLine(Intedent(2) + $"const data = {{}}" + Sc);
                    foreach (var (name, type) in input)
                    {
                        ret.AppendLine(Intedent(2) + $"data.{ReflectionUtil.ToCamelCase(name)} = JSON.stringify({ReflectionUtil.ToCamelCase(name)})" + Sc);
                    }
                    ret.AppendLine(Intedent(2) + $"if(method === 'get') return this.getEmpty(`${{this.url}}/{ReflectionUtil.ToCamelCase(m.Name)}`, formData)" + Sc);
                    ret.AppendLine(Intedent(2) + $"return this.postEmpty(`${{this.url}}/{ReflectionUtil.ToCamelCase(m.Name)}`, data)" + Sc);
                    ret.AppendLine(Intedent(1) + $"}}");
                }

            }
            
            ret.AppendLine(Intedent(0) + $"}}");
            ret.AppendLine();

            return ret.ToString();
        }

        /// <summary>
        /// Get js type name
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        private string GetTypeName(Type t)
        {
            if (t == null) throw new Exception("type is null");

            //Enum
            if (t.IsEnum)
            {
                return "number";
            }
            if (Nullable.GetUnderlyingType(t) != null && Nullable.GetUnderlyingType(t).IsEnum)
            {
                return "number";
            }

            //Nullable?
            if (Nullable.GetUnderlyingType(t) != null )
            {
                t = Nullable.GetUnderlyingType(t);
            }

            //Primitive
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

            //Array
            if (t.IsArray && ReflectionUtil.IsNullable(t.GetElementType()))
            {
                return "Array<" + GetTypeName(t.GetElementType()) + ">";
            }
            if (t.IsArray && !ReflectionUtil.IsNullable(t.GetElementType()))
            {
                return "Array<" + GetTypeName(t.GetElementType()) + ">";
            }

            //Enumerable
            if (t?.GenericTypeArguments.Length == 1 && t.GetInterfaces().Contains(typeof(IEnumerable)))
            {
                var baseType = t.GetGenericArguments()[0];
                if (ReflectionUtil.IsNullable(baseType))
                {
                    return "Array<" + GetTypeName(t.GenericTypeArguments[0]) + ">";
                }
                else
                {
                    return "Array<" + GetTypeName(t.GenericTypeArguments[0]) + ">";
                }
            }

            //Generic
            if (t?.GenericTypeArguments.Length == 1 && !t.GetInterfaces().Contains(typeof(IEnumerable)))
            {
                return t.Name + "<" + GetTypeName(t.GenericTypeArguments[0]) + ">";
            }

            //Object
            if (t?.GenericTypeArguments.Length == 0)
            {
                return t.Name;
            }

            throw new Exception("Unknown type " + t.FullName);
        }

        /// <summary>
        /// Intedent helper
        /// </summary>
        /// <param name="count"></param>
        /// <returns></returns>
        private string Intedent(int count)
        {
            var ret = new StringBuilder();

            for (var i = 0; i < count; i++)
            {
                ret.Append(_options.Indentent);
            }

            return ret.ToString();
        }

        /// <summary>
        /// Intendent helper
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        private string Intedent(string str)
        {
            var count = 0;
            var done = false;
            var ret = new StringBuilder();
            foreach (var c in str)
            {
                if (c == ' ' && !done)
                {
                    count++;
                }
                else
                {
                    ret.Append(c);
                    done = true;
                }
            }

            return Intedent(count / 2) + ret;
        }

    }
}
