namespace Spagme.Js
{
    public class JsGenOptions
    {
        public bool Semicolon { get; set; } = true;
        public string Indentent { get; set; } = "  ";
        public bool DisableLint { get; set; } = true;
        public string ApiName { get; set; } = "api";
        public string ApiClassName { get; set; } = "Api";
        public string Url { get; set; }
        public JsModule Module { get; set; } = JsModule.Es6;
    }
}