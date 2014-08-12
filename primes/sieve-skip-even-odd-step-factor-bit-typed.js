var BitArray = require('./bitArrayTyped');

//http://codereview.stackexchange.com/questions/7338/sieve-of-eratosthenes-optimization
function getPrimes(max) {
    var i, j, primes = [];
    var sieve = new BitArray(max);
    primes.push(2);
    primes.push(3);
    for (i = 5, step = 2; i <= max; i += step, step = 6 - step) {
        if ( !sieve.get(i-1) ) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve.set(j-1, true);
            }
        }
    }
	    
    //console.log(sieve.toString());
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
