using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spagme;
using Spagme.Test.Tests;

namespace Test.Api.Controllers
{
    [ApiController]
    [Route("api")]
    public class ApiController : ControllerBase
    {
        private readonly ILogger<ApiController> _logger;

        public ApiController(ILogger<ApiController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [HttpGet]
        [Route("{apiname}/{method}")]
        public async Task<ActionResult> Call([FromRoute] string apiname, [FromRoute] string method)
        {
            if (string.IsNullOrWhiteSpace(method)) return BadRequest("method is null");
            if (string.IsNullOrWhiteSpace(apiname)) return BadRequest("apiname is null");

            method = method.ToLower();
            apiname = apiname.ToLower();

            var apiType = typeof(ITest).Assembly.DefinedTypes
                .SingleOrDefault(o => o.FullName?.ToLower() == apiname);

            if (apiType == null) return BadRequest("api type not found: " + apiname);

            try
            {
                var input = Request.Query.ToDictionary(o => o.Key.ToLower(), pair => pair.Value.ToString());
                if (!input.Keys.Any())
                {
                    input = Request.Form.ToDictionary(o => o.Key.ToLower(), pair => pair.Value.ToString());
                }

                return new ContentResult()
                {
                    Content = await SpagmeApi.Call(Activator.CreateInstance(apiType), method, input),
                    ContentType = "application/json"
                };
            }
            catch (Exception exc)
            {
                _logger.LogError(exc, "error");
                return Problem("Error. Message: " + exc.Message, null, 500);
            }

        }
    }
}