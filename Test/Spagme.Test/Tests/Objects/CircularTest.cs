using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spagme.Test.Tests.Objects
{
    public class CircularTest : ITest
    {
        public Task<Models.Circular> Circular(Models.Circular input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<IEnumerable<Models.Circular>>> CircularArrayOfArrays(IEnumerable<IEnumerable<Models.Circular>> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<Models.Circular[]>> CircularListOfArrays(IEnumerable<Models.Circular[]> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<Models.Circular>[]> CircularArraysOfLists(IEnumerable<Models.Circular>[] input)
        {
            return Task.FromResult(input);
        }

    }
}
