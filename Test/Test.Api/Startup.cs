
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Spagme;
using Spagme.Js;
using Spagme.Test;

namespace Test.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpContextAccessor();

            services.AddCors(options =>
            {
                options.AddPolicy("any",
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
            });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                new TsTestGenerator("../test-node-ts/src/gen").Generate();
                new TsTestGenerator("../test-react-ts/src/gen").Generate();
                new TsTestGenerator("../test-angular-ts/src/app/gen").Generate();
                new JsTestGenerator(JsModule.Require, "../test-node-js-require/src/gen", Configuration["Url"]).Generate();
                new JsTestGenerator(JsModule.Es6, "../test-node-js-es6/src/gen", Configuration["Url"]).Generate();
                new JsTestGenerator(JsModule.Es6, "../test-react-js/src/gen", Configuration["Url"]).Generate();
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors("any");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
