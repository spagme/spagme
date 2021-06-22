using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class IntTest : ITest
    {
        public Task<int> Int(int input)
        {
            return Task.FromResult(input);
        }

        public Task<int?> IntNullable(int? input)
        {
            return Task.FromResult(input);
        }
    }
}
