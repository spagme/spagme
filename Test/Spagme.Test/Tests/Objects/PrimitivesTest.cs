using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spagme.Test.Tests.Objects
{
    public class PrimitivesTest : ITest
    {

        public Task<Models.Primitives> Primitives(Models.Primitives input)
        {
            return Task.FromResult(input);
        }

        public Task<Models.PrimitivesNullable> PrimitivesNullable(Models.PrimitivesNullable input)
        {
            return Task.FromResult(input);
        }

        public Task<Models.PrimitivesNullable[]> PrimitivesNullableArray(Models.PrimitivesNullable[] input)
        {
            return Task.FromResult(input);
        }

        public Task<Models.Primitives[]> PrimitivesArray(Models.Primitives[] input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<IEnumerable<Models.Primitives>>> PrimitivesArrayOfArrays(IEnumerable<IEnumerable<Models.Primitives>> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<Models.Primitives[]>> PrimitivesListOfArrays(IEnumerable<Models.Primitives[]> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<Models.Primitives>[]> PrimitivesArraysOfLists(IEnumerable<Models.Primitives>[] input)
        {
            return Task.FromResult(input);
        }
    }
}
