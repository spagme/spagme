using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class UshortTest : ITest
    {
        public Task<ushort> Ushort(ushort input)
        {
            return Task.FromResult(input);
        }

        public Task<ushort?> UshortNullable(ushort? input)
        {
            return Task.FromResult(input);
        }
    }
}
