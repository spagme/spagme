using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class FloatTest : ITest
    {
        public Task<float> Float(float input)
        {
            return Task.FromResult(input);
        }

        public Task<float?> FloatNullable(float? input)
        {
            return Task.FromResult(input);
        }
    }
}
