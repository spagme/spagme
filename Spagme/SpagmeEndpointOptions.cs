using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Spagme
{
    public class SpagmeEndpointOptions
    {
        /// <summary>
        /// Function that runs before call. Return true=continue or false=break
        /// </summary>
        public Func<HttpContext, string, Task<bool>> OnBefore { get; set; }

        /// <summary>
        /// Function that runs when an exception is raised. Return true=continue or false=break
        /// </summary>
        public Func<HttpContext, string, Exception, Task<bool>> OnError { get; set; }

        /// <summary>
        /// Function that runs after call
        /// </summary>
        public Func<HttpContext, string, Task> OnAfter { get; set; }

    }
}
