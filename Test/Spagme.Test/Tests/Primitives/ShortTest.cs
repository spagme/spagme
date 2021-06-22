using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class ShortTest : ITest
    {
        public Task<short> Short(short input)
        {
            return Task.FromResult(input);
        }

        public Task<short?> ShortNullable(short? input)
        {
            return Task.FromResult(input);
        }
    }
}
