using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Spagme
{
    public static class SpagmeExtension
    {
        public static void UseSpagmeEndpoint(this WebApplication app, Type type, string route, Func<HttpContext,string,bool> auth = null, ILogger logger = null)
        {
            app.UseEndpoints(endpoints =>
            {
                //Spagme api endpoint
                endpoints.Map(route + "/{method}", async context =>
                {

                    //Get which method is called
                    var method = context.Request.RouteValues["method"]?.ToString();
                    if (string.IsNullOrWhiteSpace(method))
                    {
                        context.Response.StatusCode = StatusCodes.Status400BadRequest;
                        await context.Response.WriteAsync("method is null");
                        return;
                    }

                    //Authentication and authorization
                    if (auth != null && !auth.Invoke(context, method.ToLower().Trim()))
                    {
                        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                        return;
                    }

                    //Get logger and api class instance
                    if(logger == null)
                    {
                        logger = endpoints.ServiceProvider.GetService<ILogger>();
                    }
                    var myapi = endpoints.ServiceProvider.GetService(type);

                    try
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
                        return;

                    }
                    catch (Exception exc)
                    {
                        //Internal server error
                        if (logger != null) logger.LogError(exc, $"Error when calling method {method}");
                        context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                        await context.Response.WriteAsync(exc.Message);
                        return;
                    }
                });
            });
        }
    }
}
