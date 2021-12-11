using System;
using System.IO;
using Spagme.Js;
using Spagme.Ts;

namespace Spagme
{
    public static class SpagmeGen
    {

        public static string Ts<T>(TsGenOptions options = null)
        {
            return new TsGen(typeof(T), options).Generate();
        }

        public static void Ts<T>(string file, TsGenOptions options = null)
        {
            File.WriteAllText(file, Ts(typeof(T), options));
        }

        public static string Ts(Type type, TsGenOptions options = null)
        {
            return new TsGen(type, options).Generate();
        }

        public static void Ts(Type type, string file, TsGenOptions options = null)
        {
            File.WriteAllText(file, Ts(type, options));
        }

        public static string Js<T>(JsGenOptions options = null)
        {
            return new JsGen(typeof(T), options).Generate();
        }

        public static void Js<T>(string file, JsGenOptions options = null)
        {
            File.WriteAllText(file, Js(typeof(T), options));
        }

        public static void Js(Type type, string file, JsGenOptions options = null)
        {
            File.WriteAllText(file, Js(type, options));
        }

        public static string Js(Type type, JsGenOptions options = null)
        {
            return new JsGen(type, options).Generate();
        }

    }
}
