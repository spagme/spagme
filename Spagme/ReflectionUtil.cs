using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Spagme
{
    public class ReflectionUtil
    {
        public static List<MethodInfo> GetMethods(Type type)
        {
            var ret = new List<MethodInfo>();

            foreach (var methodInfo in type.GetMethods().Where(o => o.IsPublic).OrderBy(o => o.Name.ToLower()))
            {
                if (typeof(object).GetMethods().Any(o => o.Name == methodInfo.Name)) continue;
                ret.Add(methodInfo);
            }

            return ret;
        }

        public static IList<Type> GetTypes(List<MethodInfo> methodInfos)
        {
            var ret = new List<Type>();

            foreach (var methodInfo in methodInfos)
            {
                if (typeof(object).GetMethods().Any(o => o.Name == methodInfo.Name)) continue;

                var output = GetOutputType(methodInfo);
                var input = GetInputTypes(methodInfo);

                if (output != null)
                {
                    GetType(output, ret);
                }

                foreach (var type in input)
                {
                    GetType(type.Item2, ret);
                }
            }

            ret = ret.OrderBy(t => GetHierarchy(t).Count()).ToList();

            return ret;
        }

        public static Type GetBaseType(Type type)
        {
            return (type.BaseType == null || type.BaseType.FullName == typeof(object).FullName) ? type : GetBaseType(type);
        }

        public static Type GetOutputType(MethodInfo methodInfo)
        {
            //Must return type
            if (methodInfo.ReturnType == null)
            {
                throw new Exception($"Method must return Task or Task<>. Method name={methodInfo.Name}");
            }

            if (methodInfo.ReturnType == typeof(Task))
            {
                return null;
            }

            //Validate return type
            if (!methodInfo.ReturnType.IsGenericType 
                || methodInfo.ReturnType.GetGenericTypeDefinition() != typeof(Task<>) 
                || methodInfo.ReturnType.GenericTypeArguments.Length != 1)
            {
                throw new Exception($"Method must return Task or Task<>. Method name={methodInfo.Name}");
            }

            return methodInfo.ReturnType.GenericTypeArguments.Length == 0 ? null : methodInfo.ReturnType.GenericTypeArguments[0];
        }

        public static List<Tuple<string,Type>> GetInputTypes(MethodInfo methodInfo)
        {
            var ret = new List<Tuple<string, Type>>();

            foreach (var parameter in methodInfo.GetParameters())
            {
                ret.Add(new Tuple<string, Type>(parameter.Name, parameter.ParameterType));
            }

            return ret;
        }

        public static bool IsPrimitive(Type type)
        {
            if (type == typeof(string)) return true;
            if (type == typeof(bool)) return true;
            if (type == typeof(byte)) return true;
            if (type == typeof(sbyte)) return true;
            if (type == typeof(char)) return true;
            if (type == typeof(decimal)) return true;
            if (type == typeof(double)) return true;
            if (type == typeof(float)) return true;
            if (type == typeof(int)) return true;
            if (type == typeof(uint)) return true;
            if (type == typeof(long)) return true;
            if (type == typeof(ulong)) return true;
            if (type == typeof(short)) return true;
            if (type == typeof(ushort)) return true;
            if (type == typeof(DateTime)) return true;
            if (type == typeof(bool?)) return true;
            if (type == typeof(byte?)) return true;
            if (type == typeof(sbyte?)) return true;
            if (type == typeof(char?)) return true;
            if (type == typeof(decimal?)) return true;
            if (type == typeof(double?)) return true;
            if (type == typeof(float?)) return true;
            if (type == typeof(int?)) return true;
            if (type == typeof(uint?)) return true;
            if (type == typeof(long?)) return true;
            if (type == typeof(ulong?)) return true;
            if (type == typeof(short?)) return true;
            if (type == typeof(ushort?)) return true;
            if (type == typeof(DateTime?)) return true;
            if (type.FullName == typeof(object).FullName) return true;
            return false;
        }

        public static bool IsNullable(Type type)
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

        public static string ToCamelCase(string str)
        {
            if (str?.Length > 1) return char.ToLowerInvariant(str[0]) + str.Substring(1);
            return str;
        }

        private static void GetType(Type type, List<Type> types)
        {
            if (IsPrimitive(type)) return;

            if (type.IsArray)
            {
                GetType(type.GetElementType(), types);
                return;
            }

            if (types.Any(o => o.FullName == type.FullName)) return;

            if (type.IsGenericType && type.GenericTypeArguments.Length == 1)
            {
                GetType(type.GenericTypeArguments[0], types);
                return;
            }

            types.Add(type);
            foreach (var p in type.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
            {
                GetType(p.PropertyType, types);
            }

            if (type.BaseType != null && !type.IsEnum) GetType(type.BaseType, types);
        }

        private static IEnumerable<Type> GetHierarchy(Type type)
        {
            while (type != null)
            {
                yield return type;
                type = type.BaseType;
            }
        }

    }
}
