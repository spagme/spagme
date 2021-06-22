using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class UlongTest : ITest
    {
        public Task<ulong> Ulong(ulong input)
        {
            return Task.FromResult(input);
        }

        public Task<ulong?> UlongNullable(ulong? input)
        {
            return Task.FromResult(input);
        }
    }
}
