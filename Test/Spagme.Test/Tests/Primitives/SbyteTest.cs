using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class SbyteTest : ITest
    {
        public Task<sbyte> Sbyte(sbyte input)
        {
            return Task.FromResult(input);
        }

        public Task<sbyte?> SbyteNullable(sbyte? input)
        {
            return Task.FromResult(input);
        }
    }
}
