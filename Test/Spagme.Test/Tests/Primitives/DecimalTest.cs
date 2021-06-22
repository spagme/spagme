using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class DecimalTest : ITest
    {
        public Task<decimal> Decimal(decimal input)
        {
            return Task.FromResult(input);
        }

        public Task<decimal?> DecimalNullable(decimal? input)
        {
            return Task.FromResult(input);
        }
    }
}
