using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class PrimitivesIEnumerableTest : ITest
    {
        public Task<IEnumerable<bool>> BooleanArray(IEnumerable<bool> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<bool?>> BooleanNullableArray(IEnumerable<bool?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<char>> CharArray(IEnumerable<char> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<char?>> CharNullableArray(IEnumerable<char?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<DateTime>> DateTimeArray(IEnumerable<DateTime> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<DateTime?>> DateTimeNullableArray(IEnumerable<DateTime?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<decimal>> DecimalArray(IEnumerable<decimal> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<decimal?>> DecimalNullableArray(IEnumerable<decimal?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<double>> DoubleArray(IEnumerable<double> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<double?>> DoubleNullableArray(IEnumerable<double?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<float>> FloatArray(IEnumerable<float> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<float?>> FloatNullableArray(IEnumerable<float?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<int>> IntArray(IEnumerable<int> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<int?>> IntNullableArray(IEnumerable<int?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<long>> LongArray(IEnumerable<long> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<long?>> LongNullableArray(IEnumerable<long?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<sbyte>> SbyteArray(IEnumerable<sbyte> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<sbyte?>> SbyteNullableArray(IEnumerable<sbyte?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<short>> ShortArray(IEnumerable<short> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<short?>> ShortNullableArray(IEnumerable<short?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<string>> StringArray(IEnumerable<string> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<uint>> UintArray(IEnumerable<uint> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<uint?>> UintArrayNullable(IEnumerable<uint?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<ulong>> UlongArray(IEnumerable<ulong> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<ulong?>> UlongArrayNullable(IEnumerable<ulong?> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<ushort>> UshortArray(IEnumerable<ushort> input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<ushort?>> UshortArrayNullable(IEnumerable<ushort?> input)
        {
            return Task.FromResult(input);
        }

    }
}
