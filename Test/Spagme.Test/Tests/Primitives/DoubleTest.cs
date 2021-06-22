using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class DoubleTest : ITest
    {
        public Task<double> Double(double input)
        {
            return Task.FromResult(input);
        }

        public Task<double?> DoubleNullable(double? input)
        {
            return Task.FromResult(input);
        }
    }
}
