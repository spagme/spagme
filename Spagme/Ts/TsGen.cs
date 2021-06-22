using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Spagme.Ts
{

    /// <summary>
    /// Generates .ts client files
    /// </summary>
    public class TsGen
    {
        /// <summary>
        /// Options
        /// </summary>
        private readonly TsGenOptions _options;

        /// <summary>
        /// Semicolon
        /// </summary>
        private string Sc => _options.Semicolon ? ";" : "";

        /// <summary>
        /// Api service type
        /// </summary>
        private readonly Type _type;

        public TsGen(Type type, TsGenOptions options = null)
        {
            _type = type;
            _options = options ?? new TsGenOptions();
        }

        /// <summary>
        /// Generates .ts client files
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

            //Generate code for each type referenced in the methods
            foreach (var type in types)
            {
                content.Append(GenerateTsObject(type));
            }

            //Generate interface
            content.Append(GenerateTsInterface(methodInfos));

            //Generate abstract class
            content.Append(GenerateTsBase(methodInfos));

            //Generate class
            content.Append(GenerateTsClass(methodInfos));

            return content.ToString();
        }

        /// <summary>
        /// Generates ts class for a type
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        private string GenerateTsObject(Type t)
        {
            //If it is a primitive no object should be generated
            if (ReflectionUtil.IsPrimitive(t)) return "";

            var ret = new StringBuilder();

            //Enum
            if (t.IsEnum)
            {
                ret.AppendLine(Intedent(0) + $"export enum {t.Name} {{");
                foreach (var e in Enum.GetValues(t))
                {
                    ret.AppendLine(Intedent(1) + $"{e} = {Convert.ChangeType(e, Enum.GetUnderlyingType(t))},");
                }
                ret.AppendLine(Intedent(0) + $"}}");
                ret.AppendLine();
                return ret.ToString();
            }

            //Empty object
            if (t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly).Length == 0)
            {
                ret.AppendLine(Intedent(0) + $"// eslint-disable-next-line @typescript-eslint/no-empty-interface");
                if (t.BaseType == null || t.BaseType.Name == "Object")
                {
                    ret.AppendLine(Intedent(0) + $"export interface {t.Name} {{}}");
                }
                else
                {
                    ret.AppendLine(Intedent(0) + $"export interface {t.Name} extends {GetTypeName(t.BaseType)} {{}}");
                }
                return ret.ToString();
            }

            //Class
            if (t.BaseType == null || t.BaseType.Name == "Object")
            {
                ret.AppendLine(Intedent(0) + $"export interface {t.Name} {{");
            }
            else
            {
                ret.AppendLine(Intedent(0) + $"export interface {t.Name} extends {GetTypeName(t.BaseType)} {{");
            }

            //Generate properties
            foreach (var prop in t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
            {
                if (ReflectionUtil.IsNullable(prop.PropertyType))
                {
                    ret.AppendLine(Intedent(1) + $"{ReflectionUtil.ToCamelCase(prop.Name)}?: {GetTypeName(prop.PropertyType)} | null | undefined" + Sc);
                }
                else
                {
                    ret.AppendLine(Intedent(1) + $"{ReflectionUtil.ToCamelCase(prop.Name)}: {GetTypeName(prop.PropertyType)}" + Sc);
                }
            }

            ret.AppendLine(Intedent(0) + $"}}");
            ret.AppendLine();
            return ret.ToString();
        }

        /// <summary>
        /// Generates api interface
        /// </summary>
        /// <param name="methods"></param>
        /// <returns></returns>
        private string GenerateTsInterface(List<MethodInfo> methods)
        {
            var ret = new StringBuilder();

            //interface declaration
            ret.AppendLine(Intedent(0) + $"export interface {_options.ApiClassName}Interface {{");

            //methods
            foreach (var m in methods.OrderBy(o => o.Name))
            {
                var output = ReflectionUtil.GetOutputType(m);
                var input = ReflectionUtil.GetInputTypes(m);

                //method name
                ret.Append(Intedent(1) + $"{ReflectionUtil.ToCamelCase(m.Name)}: (");

                //inputs
                var appendComma = false;
                foreach (var (name, type) in input)
                {
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    appendComma = true;
                    ret.Append($"{ReflectionUtil.ToCamelCase(name)}: {GetTypeName(type)}{Null(type)}");
                }
                if (appendComma)
                {
                    ret.Append(", ");
                }
                ret.Append("method?: string");
                ret.Append(")");

                //output
                if (output == null)
                {
                    ret.Append(" => Promise<void>");
                }
                else
                {
                    ret.Append($" => Promise<{GetTypeName(output)}{Null(output)}>");
                }

                //end of line
                ret.AppendLine(",");
            }

            ret.AppendLine(Intedent(0) + $"}}");
            ret.AppendLine();

            return ret.ToString();
        }

        /// <summary>
        /// Generates api abstract class
        /// </summary>
        /// <param name="methods"></param>
        /// <returns></returns>
        private string GenerateTsBase(List<MethodInfo> methods)
        {
            var ret = new StringBuilder();
            ret.AppendLine(Intedent(0) + $"export abstract class {_options.ApiClassName}Base implements {_options.ApiClassName}Interface {{");

            //methods
            foreach (var m in methods.OrderBy(o => o.Name))
            {
                var output = ReflectionUtil.GetOutputType(m);
                var input = ReflectionUtil.GetInputTypes(m);

                //method name
                ret.Append(Intedent(1) + $"abstract {ReflectionUtil.ToCamelCase(m.Name)}: (");

                //inputs
                var appendComma = false;
                foreach (var (name, type) in input)
                {
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    appendComma = true;
                    ret.Append($"{ReflectionUtil.ToCamelCase(name)}: {GetTypeName(type)}{Null(type)}");
                }
                if (appendComma)
                {
                    ret.Append(", ");
                }
                ret.Append("method?: string");
                ret.Append(")");

                //output
                if (output == null)
                {
                    ret.Append(" => Promise<void>");
                }
                else
                {
                    ret.Append($" => Promise<{GetTypeName(output)}{Null(output)}>");
                }

                //end of line
                ret.AppendLine(Sc);
            }

            ret.AppendLine(Intedent(0) + $"}}");
            ret.AppendLine();

            return ret.ToString();
        }

        /// <summary>
        /// Generates api class
        /// </summary>
        /// <param name="methods"></param>
        /// <returns></returns>
        private string GenerateTsClass(List<MethodInfo> methods)
        {
            var ret = new StringBuilder();

            ret.AppendLine(Intedent(0) + $"export class {_options.ApiClassName} implements {_options.ApiClassName}Base {{");

            //url, init, constructor and revive
            ret.AppendLine(Intedent(1) +   $"url: string" + Sc);
            ret.AppendLine(Intedent(1) +   $"init: RequestInit" + Sc);
            if (_options.Url != null)
            {
                ret.AppendLine(Intedent(1) + $"constructor(url: string = \"{_options.Url}\", init: RequestInit = {{}}) {{");
            }
            else
            {
                ret.AppendLine(Intedent(1) + $"constructor(url: string, init: RequestInit = {{}}) {{");
            }
            ret.AppendLine(Intedent(2) +   $"this.url = url" + Sc);
            ret.AppendLine(Intedent(2) +   $"this.init = init" + Sc);
            ret.AppendLine(Intedent(1) +   $"}}");
            ret.AppendLine(Intedent(1) +   "private revive(key: any, value: any): any {");
            ret.AppendLine(Intedent(2) +    "if (typeof value === 'string') {");
            ret.AppendLine(Intedent(3) +      "if(/\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\\d|3[0-1])T(?:[0-1]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+|)(?:Z|(?:\\+|-)(?:\\d{2}):?(?:\\d{2}))/.exec(value)) {");
            ret.AppendLine(Intedent(4) +        "return new Date(value)" + Sc);
            ret.AppendLine(Intedent(3) +      "}");
            ret.AppendLine(Intedent(2) +    "}");
            ret.AppendLine(Intedent(2) +   "return value" + Sc);
            ret.AppendLine(Intedent(1) + "}" + Sc);

            //post and get helpers
            ret.AppendLine(Intedent(1) + Intedent("private post(url: string, data: any) : Promise<any> {"));
            ret.AppendLine(Intedent(1) + Intedent("  return new Promise<any>( (resolve, reject) => {"));
            ret.AppendLine(Intedent(1) + Intedent("    let formData = new FormData()") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      formData.append(key, data[key] as string)"));
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
            ret.AppendLine(Intedent(1) + Intedent("}"));
            ret.AppendLine(Intedent(1) + Intedent("private get(url: string, data: any) : Promise<any> {"));
            ret.AppendLine(Intedent(1) + Intedent("  return new Promise<any>( (resolve, reject) => {"));
            ret.AppendLine(Intedent(1) + Intedent("    const u = new URL(url)") + Sc);
            ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
            ret.AppendLine(Intedent(1) + Intedent("      u.searchParams.append(key, data[key] as string)"));
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
            ret.AppendLine(Intedent(1) + Intedent("}"));

            //post and get helpers when no object is returned
            if (methods.Any(o => ReflectionUtil.GetOutputType(o) == null))
            {
                ret.AppendLine(Intedent(1) + Intedent("private postEmpty(url: string, data: any) : Promise<void> {"));
                ret.AppendLine(Intedent(1) + Intedent("  return new Promise<any>( (resolve, reject) => {"));
                ret.AppendLine(Intedent(1) + Intedent("    let formData = new FormData()") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      formData.append(key, data[key] as string)"));
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
                ret.AppendLine(Intedent(1) + Intedent("}"));
                ret.AppendLine(Intedent(1) + Intedent("private getEmpty(url: string, data: any) : Promise<void> {"));
                ret.AppendLine(Intedent(1) + Intedent("  return new Promise<any>( (resolve, reject) => {"));
                ret.AppendLine(Intedent(1) + Intedent("    let u = new URL(url)") + Sc);
                ret.AppendLine(Intedent(1) + Intedent("    Object.keys(data).forEach((key) => {"));
                ret.AppendLine(Intedent(1) + Intedent("      u.searchParams.append(key, data[key] as string)"));
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
                ret.AppendLine(Intedent(1) + Intedent("}"));

            }

            //Generate code for each api method
            foreach (var m in methods)
            {
                var output = ReflectionUtil.GetOutputType(m);
                var input = ReflectionUtil.GetInputTypes(m);

                //Output
                if (output != null)
                {
                    ret.Append(Intedent(1) + $"{ReflectionUtil.ToCamelCase(m.Name)}: (");
                    var appendComma = false;
                    foreach (var (name, type) in input)
                    {
                        if (appendComma)
                        {
                            ret.Append(", ");
                        }
                        appendComma = true;
                        ret.Append($"{ReflectionUtil.ToCamelCase(name)}: {GetTypeName(type)}{Null(type)}");
                    }
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    ret.Append("method?: string");
                    ret.Append(") ");
                    ret.Append($" => Promise<{GetTypeName(output)}{Null(output)}> = (");
                    appendComma = false;
                    foreach (var (name, type) in input)
                    {
                        if (appendComma)
                        {
                            ret.Append(", ");
                        }
                        appendComma = true;
                        ret.Append($"{ReflectionUtil.ToCamelCase(name)}: {GetTypeName(type)}{Null(type)}");
                    }
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    ret.Append("method?: string");
                    ret.Append(") ");
                    ret.AppendLine($": Promise<{GetTypeName(output)}{Null(output)}> => {{");
                    ret.AppendLine(Intedent(2) + $"const data: any = {{}}" + Sc);
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
                    ret.Append(Intedent(1) + $"{ReflectionUtil.ToCamelCase(m.Name)}: (");
                    var appendComma = false;
                    foreach (var (name, type) in input)
                    {
                        if (appendComma)
                        {
                            ret.Append(", ");
                        }
                        appendComma = true;
                        ret.Append($"{ReflectionUtil.ToCamelCase(name)}: {GetTypeName(type)}{Null(type)}");
                    }
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    ret.Append("method?: string");
                    ret.Append(") ");
                    ret.Append($" => Promise<void> = (");
                    appendComma = false;
                    foreach (var (name, type) in input)
                    {
                        if (appendComma)
                        {
                            ret.Append(", ");
                        }
                        appendComma = true;
                        ret.Append($"{ReflectionUtil.ToCamelCase(name)}: {GetTypeName(type)}{Null(type)}");
                    }
                    if (appendComma)
                    {
                        ret.Append(", ");
                    }
                    ret.Append("method?: string");
                    ret.Append(") ");
                    ret.AppendLine($": Promise<void> => {{");

                    ret.AppendLine(Intedent(2) + $"const data: any = {{}}" + Sc);
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
        /// Get ts type
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        private string GetTypeName(Type t)
        {
            if (t == null) throw new Exception("type is null");

            //Enum
            if (t.IsEnum)
            {
                return t.Name;
            }
            if (Nullable.GetUnderlyingType(t) != null && Nullable.GetUnderlyingType(t).IsEnum)
            {
                return Nullable.GetUnderlyingType(t).Name + " | null";
            }

            //Nullable?
            if (Nullable.GetUnderlyingType(t) != null)
            {
                t = Nullable.GetUnderlyingType(t);
            }

            //Enum array
            if (t.IsArray && t.GetElementType() != null)
            {
                var elementType = t.GetElementType();
                if (elementType != null)
                {
                    if (elementType.IsEnum)
                    {
                        return "Array<" + t.Name + ">";
                    }
                    if (Nullable.GetUnderlyingType(elementType) != null && Nullable.GetUnderlyingType(elementType).IsEnum)
                    {
                        return "Array<" + Nullable.GetUnderlyingType(elementType).Name + " | null>";
                    }
                }
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
                return "Array<" + GetTypeName(t.GetElementType()) + " | null>";
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
                    return "Array<" + GetTypeName(t.GenericTypeArguments[0]) + " | null>";
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

        private string Intedent(int count)
        {
            var ret = new StringBuilder();

            for (var i = 0; i < count; i++)
            {
                ret.Append(_options.Indentent);
            }

            return ret.ToString();
        }

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

        private string Null(Type type)
        {
            if (ReflectionUtil.IsNullable(type)) return " | null";
            return "";
        }

    }
}
