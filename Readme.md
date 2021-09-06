# Spagme

Spagme is a framework that creates client code based on an API that is hosted in a aspnet web application and is defined by a C# class or interface.

Currently supported client languages are Typescript and Javascript.

# Articles

- [Background](https://medium.com/@nilsflemstrom/spagme-a91067c23764)

# Getting started

## Add nuget package

```
dotnet add package Spagme
```

## Define the api

```c#
public interface IApi
{
    Task<string> Hello(string name);
}

public class Api : IApi
{
    public Task<string> Hello(string name)
    {
        return Task.FromResult("Hello, " + name);
    }
}
```

## Generate client code at startup

```c#

public void ConfigureServices(IServiceCollection services)
{
    services.AddTransient<IApi, Api>();

    //...
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        SpagmeGen.Ts(typeof(IApi), "<path>/api.ts");

        app.UseDeveloperExceptionPage();
    }

    //...
}
```

## Create the controller

```c#
[ApiController]
[Route("api")]
public class ApiController : ControllerBase {

    private readonly ILogger<ApiController> _logger;
    private readonly IApi _api;

    public ApiController(ILogger<ApiController> logger, IApi api)
    {
        _logger = logger;
        _api = api;
    }

    [HttpPost]
    [HttpGet]
    [Route("{method}")]
    public async Task<ActionResult> Call([FromRoute] string method)
    {
        if (string.IsNullOrWhiteSpace(method)) return BadRequest("method is null");

        try
        {

            var input = Request.HasFormContentType
                ? Request.Form.ToDictionary(o => o.Key.ToLower(),
                 pair => pair.Value.ToString())
                : Request.Query.ToDictionary(o => o.Key.ToLower(),
                 pair => pair.Value.ToString());

            return new ContentResult()
            {
                Content = await SpagmeApi.Call(_api, method, input),
                ContentType = System.Net.Mime.MediaTypeNames.Application.Json
            };

        }
        catch (Exception exc)
        {
            _logger.LogError(exc, $"Error calling method {method}");
            return StatusCode(StatusCodes.Status500InternalServerError,
                $"Error calling method {method}: {exc.Message}");
        }

    }

}
```

## Call the api

```ts
const api = new Api("<host>/api");
api.hello("Bob").then((data) => {
  console.log(data); //Hello, Bob
});
```
