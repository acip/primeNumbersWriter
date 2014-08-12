
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    primes.push(2);
    for (i = 3; i <= max; i+=2) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

for (i = 1 ; i < 2; i ++ ) {
	console.time("primes");
	var primes = getPrimes(10000000);
	console.timeEnd("primes");
}


var util = require('util');
console.log(util.inspect(process.memoryUsage()));

console.log(primes);
