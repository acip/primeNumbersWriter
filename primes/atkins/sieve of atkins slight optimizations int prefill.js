function sieveAtkinCipIntPrefill(limit) {
    'use strict';

	var is_prime = [];
	var i, ii, k, sqrtLimit;
    var x, xx, y, yy, n, nmod12;
	var primes = [2, 3];


    sqrtLimit = Math.sqrt(limit);

    for(i = 0; i <= limit; ++i) {
		is_prime[i]	= 0;
	}


    for (x = 1; x < sqrtLimit; x++) {
        xx = x * x;

        for (y = 1; y < sqrtLimit; y++) {
            yy = y * y;

            n = 4 * xx + yy;
            nmod12 = n % 12;
            if (n <= limit && (nmod12 == 1 || nmod12 == 5)) {
                is_prime[n] = is_prime[n] ^ 1;
            }

            n = 3 * xx + yy;
            nmod12 = n % 12;
            if (n <= limit && nmod12 == 7) {
                is_prime[n] = is_prime[n] ^ 1;
            }

            if  (x > y) {
                n = 3 * xx - yy;
                nmod12 = n % 12;
                if (n <= limit && nmod12 == 11) {
                    is_prime[n] = is_prime[n] ^ 1;
                }
            }
        }
    }


    for (i = 5; i < sqrtLimit; ++i) {
        if (is_prime[i] === 1) {
            ii = i * i;
            for (k = ii; k < limit; k += ii) {
                is_prime[k] = 0;
            };
        }
    }

    //build result
    for (i = 0; i < limit; ++i) {
        if (is_prime[i] === 1) {
            primes.push(i);
        }
    }

    return primes;
}


console.time("primes");
var primes = sieveAtkinCipIntPrefill(100);
console.timeEnd("primes");

var util = require('util');
console.log(util.inspect(process.memoryUsage()));

console.log(primes);
