using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class StringTest : ITest
    {
        public Task<string> String(string input)
        {
            return Task.FromResult(input);
        }
    }
}
