using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class BooleanTest : ITest
    {
        public Task<bool> Boolean(bool input)
        {
            return Task.FromResult(input);
        }

        public Task<bool?> BooleanNullable(bool? input)
        {
            return Task.FromResult(input);
        }
    }
}
