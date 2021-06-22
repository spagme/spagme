using System.Collections.Generic;
using System.Threading.Tasks;
using Spagme.Test.Tests.Models;

namespace Spagme.Test.Tests.Objects
{
    public class InheritanceTest : ITest
    {
        public Task<VolvoCar> VolvoCar(VolvoCar input)
        {
            return Task.FromResult(input);
        }

        public Task<Car> Car(Car input)
        {
            return Task.FromResult(input);
        }

        public Task<PolestarCar> PolestarCar(PolestarCar input)
        {
            return Task.FromResult(input);
        }

        public Task<FordCar> FordCar(FordCar input)
        {
            return Task.FromResult(input);
        }


        public Task<IEnumerable<Car>> IEnumerableOfCars(IEnumerable<Car> input)
        {
            return Task.FromResult(input);
        }

        public Task<Car[]> ArrayOfCars(Car[] input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<VolvoCar>> IEnumerableOfVolvoCars(IEnumerable<VolvoCar> input)
        {
            return Task.FromResult(input);
        }

        public Task<VolvoCar[]> ArrayOfVolvoCars(VolvoCar[] input)
        {
            return Task.FromResult(input);
        }

        public Task<IEnumerable<PolestarCar>> IEnumerableOfPolestarCars(IEnumerable<PolestarCar> input)
        {
            return Task.FromResult(input);
        }

        public Task<PolestarCar[]> ArrayOfPolestarCars(PolestarCar[] input)
        {
            return Task.FromResult(input);
        }


    }
}
