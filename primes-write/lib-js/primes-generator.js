'use strict';
var primesGenerator = (function() {
                 
    var getPrimes = function(max) {
        var i, j, primes = [], step;
    	
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
                //square optimization
                for (j = i * i; j <= max; j += i) {
    			    var bitIndex = ~~((j-1) >> 5);    
    			    sieve[bitIndex] |= 1 << (j-1) - (bitIndex << 5);
                }
            }
        }	    
        return primes;
    };

    var generateFirst =  function(numberOfPrimes) {
        // p_n ~ n * log n + n * log log n (http://en.wikipedia.org/wiki/Prime_number_theorem)
    	var upperBound = ~~(numberOfPrimes *  Math.log(numberOfPrimes) + numberOfPrimes * Math.log(Math.log(numberOfPrimes)));
        return getPrimes(upperBound).slice(0, 1000);
    };

    var myLib  = {generateFirst: generateFirst};

    //use as node.js module
    if ( typeof module != "undefined"  && module.exports) {
        module.exports  = myLib;
    }

    return myLib;
})();