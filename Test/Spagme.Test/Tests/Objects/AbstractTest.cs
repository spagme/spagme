using System.Threading.Tasks;
using Spagme.Test.Tests.Models;

namespace Spagme.Test.Tests.Objects
{
    public abstract class CarTest<T,K>
    {
        public abstract Task<T> Car(T input);
        public abstract Task<K> Car2(K input);
    }

    public class AbstractTest : CarTest<VolvoCar, FordCar>, ITest
    {
        public override Task<VolvoCar> Car(VolvoCar input)
        {
            return Task.FromResult(input);
        }

        public override Task<FordCar> Car2(FordCar input)
        {
            return Task.FromResult(input);
        }
    }
}
