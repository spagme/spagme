using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Spagme
{
    public static class SpagmeExtensions
    {

        public static void UseSpagmeEndpoint<T>(this WebApplication app, string route)
        {
            app.UseSpagmeEndpoint(typeof(T), route, new SpagmeEndpointOptions());
        }

        public static void UseSpagmeEndpoint<T>(this WebApplication app, string route, SpagmeEndpointOptions options)
        {
            app.UseSpagmeEndpoint(typeof(T), route, options);
        }

        public static void UseSpagmeEndpoint(this WebApplication app, Type type, string route)
        {
            app.UseSpagmeEndpoint(type, route, new SpagmeEndpointOptions());
        }

        public static void UseSpagmeEndpoint(this WebApplication app, Type type, string route, SpagmeEndpointOptions options)
        {
            app.UseEndpoints(endpoints =>
            {
                //Spagme api endpoint
                endpoints.Map(route + "/{method}", async context =>
                {

                    //Get which method is called
                    var method = context.Request.RouteValues["method"]?.ToString()?.ToLower().Trim();
                    if (string.IsNullOrWhiteSpace(method))
                    {
                        context.Response.StatusCode = StatusCodes.Status400BadRequest;
                        await context.Response.WriteAsync("method is null");
                        return;
                    }

                    //Get api instance
                    var myapi = endpoints.ServiceProvider.GetService(type);

                    //OnBefore
                    if (options.OnBefore != null)
                    {
                        var result = await options.OnBefore.Invoke(context, method);
                        if (!result) return;
                    }

                    if (options.OnError != null)
                    {
                        try
                        {
                            //Execute
                            await Execute(context, type, myapi, method);
                        }
                        catch (Exception exc)
                        {
                            //OnError
                            if (!await options.OnError.Invoke(context, method, exc)) return;
                            throw;
                        }
                    }
                    else
                    {
                        //Execute
                        await Execute(context, type, myapi, method);
                    }

                    //OnAfter
                    if (options.OnAfter != null)
                    {
                        await options.OnAfter.Invoke(context, method);
                    }

                });
            });
        }

        public static async Task<IDictionary<string, object>> SpagmeParseParameters(this HttpContext context)
        {
            if (context == null) return new Dictionary<string, object>();

            if (context.Request.HasFormContentType)
            {
                return context.Request.Form.ToDictionary(o => o.Key.ToLower(),
                    pair => (object)pair.Value.ToString());
            }

            return context.Request.Query.ToDictionary(o => o.Key.ToLower(),
                pair => (object)pair.Value.ToString());

        }

        private static async Task Execute(HttpContext context, Type type, object myapi, string method)
        {
            //Call the api
            var resp = await SpagmeApi.Call(type, myapi, method, await context.SpagmeParseParameters());

            //Create response
            context.Response.StatusCode = StatusCodes.Status200OK;
            context.Response.ContentType = System.Net.Mime.MediaTypeNames.Application.Json;
            await context.Response.WriteAsync(resp);
        }

    }
}
