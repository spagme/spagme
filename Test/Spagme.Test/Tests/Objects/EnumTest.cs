using System.Collections.Generic;
using System.Threading.Tasks;
using Spagme.Test.Tests.Models;

namespace Spagme.Test.Tests.Objects
{
    public class EnumTest : ITest
    {
        public Task<Color> Enum(Color input)
        {
            return Task.FromResult(input);
        }

        public Task<Color?> EnumNullable(Color? input)
        {
            return Task.FromResult(input);
        }

        public Task<List<Color>> EnumList(List<Color> input)
        {
            return Task.FromResult(input);
        }

        public Task<List<Color?>> EnumListNullable(List<Color?> input)
        {
            return Task.FromResult(input);
        }

        public Task<Color?[]> ArrayNullable(Color?[] input)
        {
            return Task.FromResult(input);
        }

        public Task<Color[]> ArrayNotNullable(Color[] input)
        {
            return Task.FromResult(input);
        }
    }
}