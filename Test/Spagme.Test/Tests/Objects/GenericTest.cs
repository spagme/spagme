using System.Threading.Tasks;
using Spagme.Test.Tests.Models;

namespace Spagme.Test.Tests.Objects
{
    public interface ICarTest<T,K>
    {
        Task<T> Car(T input);
        Task<K> Car2(K input);
    }

    public class GenericTest : ICarTest<VolvoCar, FordCar>, ITest
    {
        public Task<VolvoCar> Car(VolvoCar input)
        {
            return Task.FromResult(input);
        }

        public Task<FordCar> Car2(FordCar input)
        {
            return Task.FromResult(input);
        }
    }
}
