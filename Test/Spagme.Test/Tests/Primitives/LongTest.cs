using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class LongTest : ITest
    {
        public Task<long?> LongNullable(long? input)
        {
            return Task.FromResult(input);
        }
    }
}
