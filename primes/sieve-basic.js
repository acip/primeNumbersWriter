
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i * i; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

for (i = 1 ; i < 2; i ++ ) {
	console.time("primes");
	var primes = getPrimes(1000);
	console.timeEnd("primes");
}


var util = require('util');
console.log(util.inspect(process.memoryUsage()));


console.log(primes);
