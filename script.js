function generatePrimes(limit) {
    // Array to hold prime numbers
    const primes = [];

    // Loop through each number from 2 to the limit
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;

        // Check if num is prime
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        // If prime, add to primes array
        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

// Example usage:
const limit = 50; // Generate prime numbers up to 50
const primeNumbers = generatePrimes(limit);
console.log(`Prime numbers up to ${limit}:`, primeNumbers);
