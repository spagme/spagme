using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class UintTest : ITest
    {
        public Task<uint> Uint(uint input)
        {
            return Task.FromResult(input);
        }

        public Task<uint?> UintNullable(uint? input)
        {
            return Task.FromResult(input);
        }
    }
}
