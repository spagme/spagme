using System;

namespace Spagme
{
    public class SpagmeException : Exception
    {
        public SpagmeException(string message) : base(message)
        {
        }

        public SpagmeException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
