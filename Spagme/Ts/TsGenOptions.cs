namespace Spagme.Ts
{
    public class TsGenOptions
    {
        public bool Semicolon { get; set; } = true;
        public string Indentent { get; set; } = "  ";
        public bool DisableLint { get; set; } = true;
        public string ApiClassName { get; set; } = "Api";
        public string Url { get; set; }
    }
}