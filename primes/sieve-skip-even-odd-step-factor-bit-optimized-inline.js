
function getPrimes(max) {
    var i, j, primes = [];
	
	var sieve = [];
    var bitArraySize = Math.ceil(max / 32);
	
	//init sieve with 0's. found out that it is faster than no-init 
    for (i = 0; i < bitArraySize; ++i) {
        sieve[i] = 0;
    }   
	    
    primes.push(2);
    primes.push(3);
    
	//http://codereview.stackexchange.com/questions/7338/sieve-of-eratosthenes-optimization
	//factorization wheel 
    for (i = 5, step = 2; i <= max; i += step, step = 6 - step) {
	    var bitIndex = ~~((i-1) >> 5);
	    
        if ( 0 == (sieve[bitIndex] & (1 << (i-1) - (bitIndex << 5))) ) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i * i; j <= max; j += i) {
			    var bitIndex = ~~((j-1) >> 5);    
			    sieve[bitIndex] |= 1 << (j-1) - (bitIndex << 5);
            }
        }
    }
	    
    //console.log(sieve.toString());
    return primes;
}

for (i = 1 ; i < 2; i ++ ) {
	console.time("primes");
	var primes = getPrimes(1000000000);
	console.timeEnd("primes");
}


var util = require('util');
console.log(util.inspect(process.memoryUsage()));


//console.log(primes);
