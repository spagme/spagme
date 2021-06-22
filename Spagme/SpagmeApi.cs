using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Spagme
{
    public class SpagmeApi
    {
        /// <summary>
        /// Call method
        /// </summary>
        /// <param name="instance">Instance</param>
        /// <param name="method">Method</param>
        /// <param name="input">Dictionary with parameters. Must match with parameters name</param>
        /// <returns></returns>
        public static async Task<string> Call(object instance, string method, IDictionary<string, string> input)
        {
            if (instance == null) throw new SpagmeException("instance is null");
            var type = instance.GetType();

            return await Call(type, instance, method, input);
        }

        /// <summary>
        /// Call method
        /// </summary>
        /// <param name="type">Instance type</param>
        /// <param name="instance">Instance</param>
        /// <param name="method">Method</param>
        /// <param name="input">Dictionary with parameters. Must match with parameters name</param>
        /// <returns></returns>
        public static async Task<string> Call(Type type, object instance, string method, IDictionary<string, string> input)
        {
            //Null checks
            if (instance == null) throw new SpagmeException("instance is null");
            if (string.IsNullOrWhiteSpace(method)) throw new SpagmeException("method is null");

            //Check that instance is of defined type
            var isOfRightType = false;
            isOfRightType = isOfRightType || instance.GetType() == type;
            isOfRightType = isOfRightType || instance.GetType().IsSubclassOf(type);
            isOfRightType = isOfRightType || type.IsInterface && instance.GetType().GetInterfaces().Contains(type);
            if (!isOfRightType)
            {
                throw new SpagmeException($"Type {instance.GetType().FullName} doesn't implements/extends {type.FullName}");
            }

            //Get all methods
            var methodInfos = type.GetMethods().Where(o => o.IsPublic && o.Name.ToLower() == method.ToLower()).ToList();
            if (methodInfos.Count == 0) throw new SpagmeException($"Public method {method} not found on type {type.FullName}. Methods must be public.");
            if (methodInfos.Count > 1) throw new SpagmeException($"Several methods with name {method} found on type {type.FullName}. Method names must be unique and case insensitive.");
            var methodInfo = methodInfos[0];

            //Verify that return type  is Task or Task<>
            if (methodInfo.ReturnType == typeof(Task) && methodInfo.ReturnType.GenericTypeArguments.Length == 0)
            {
                //do nothing
            }
            else if (methodInfo.ReturnType.BaseType == typeof(Task) && methodInfo.ReturnType.GenericTypeArguments.Length == 1)
            {
                //do nothing
            }
            else
            {
                throw new SpagmeException($"Methods must return Task or Task<>. Method {method} is not asynchronous for type {type.FullName}.");
            }

            //Loop parameters and deserialize each parameter to a value
            var parameters = methodInfo.GetParameters();
            var parameterValues = new object[parameters.Length];
            for (var index = 0; index < parameters.Length; index++)
            {
                var parameter = parameters[index];
                var name = parameter.Name.ToLower();
                if (input.ContainsKey(name.ToLower()))
                {
                    try
                    {
                        var value = input[name];
                        parameterValues[index] = Deserialize(value, parameter.ParameterType);
                    }
                    catch (Exception exc)
                    {
                        throw new SpagmeException($"Error when deserializing parameter {parameters[index].Name} for method {method} on type {type.FullName}", exc);
                    }
                }
                else
                {
                    throw new SpagmeException($"Parameter with name {name} not found in request for {method} on type {type.FullName}");
                }
            }

            //Call instance method
            try
            {
                if (methodInfo.ReturnParameter != null)
                {
                    var task = (Task)methodInfo.Invoke(instance, parameterValues);
                    await task;
                    var resultProperty = task.GetType().GetProperties().FirstOrDefault();
                    var val = resultProperty?.GetValue(task);
                    return Serialize(val);
                }
                else
                {
                    var task = (Task)methodInfo.Invoke(instance, parameterValues);
                    await task;
                    return null;
                }
            }
            catch (Exception exc)
            {
                throw new SpagmeException($"Error when calling method {method} on type {type.FullName}", exc);
            }

        }

        /// <summary>
        /// Serialize to json
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        private static string Serialize(object obj)
        {
            return JsonSerializer.Serialize(obj, new JsonSerializerOptions()
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            });
        }

        /// <summary>
        /// Deserialize feom json
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        private static object Deserialize(string obj, Type type)
        {
            return JsonSerializer.Deserialize(obj, type, new JsonSerializerOptions()
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            });
        }
    }
}
