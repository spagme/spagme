using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class CharTest : ITest
    {
        public Task<char> Char(char input)
        {
            return Task.FromResult(input);
        }

        public Task<char?> CharNullable(char? input)
        {
            return Task.FromResult(input);
        }
    }
}
