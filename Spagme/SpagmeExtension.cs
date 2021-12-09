using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Spagme
{
    public static class SpagmeExtension
    {

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
                            await Execute(context, myapi, method);
                        }
                        catch (Exception exc)
                        {
                            //OnError
                            if(!await options.OnError.Invoke(context, method, exc)) return;
                            throw;
                        }
                    }
                    else
                    {
                        //Execute
                        await Execute(context, myapi, method);
                    }

                    //OnAfter
                    if (options.OnAfter != null)
                    {
                        await options.OnAfter.Invoke(context, method);
                    }

                });
            });
        }

        private static async Task Execute(HttpContext context, object myapi, string method)
        {
            //Parse input parameters
            var input = context.Request.HasFormContentType
                ? context.Request.Form.ToDictionary(o => o.Key.ToLower(),
                    pair => pair.Value.ToString())
                : context.Request.Query.ToDictionary(o => o.Key.ToLower(),
                    pair => pair.Value.ToString());

            //Call the api
            var resp = await SpagmeApi.Call(myapi, method, input);

            //Create response
            context.Response.StatusCode = StatusCodes.Status200OK;
            context.Response.ContentType = System.Net.Mime.MediaTypeNames.Application.Json;
            await context.Response.WriteAsync(resp);
        }

    }
}
