using System.Collections.Generic;

namespace Spagme.Test.Tests.Models
{
    public class Car
    {
        public string Brand { get; set; }
        public Color Color { get; set; }
        public Color? RoofColor { get; set; }
        public List<Color?> Options1 { get; set; }
        public List<Color> Options2 { get; set; }
    }
}
