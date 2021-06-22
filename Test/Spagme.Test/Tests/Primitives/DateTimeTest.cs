using System;
using System.Threading.Tasks;

namespace Spagme.Test.Tests.Primitives
{
    public class DateTimeTest : ITest
    {
        public Task<DateTime> DateTime(DateTime input)
        {
            return Task.FromResult(input);
        }
        public Task<DateTime?> DateTimeNullable(DateTime? input)
        {
            return Task.FromResult(input);
        }
    }
}
