'use strict';

//node.js compatibility (load dependencies)
if ( typeof require != "undefined" ) {
	//if already loaded, do not reload (this allows overwriting)
	var primesGenerator = primesGenerator || require('./primes-generator');
	var numberWriter = numberWriter || require('./number-writer');
}

var primesWriter  = (function (primesGenerator, numberWriter) {

	function yieldFirstPrimesWords(generateTo, onYieldCallback) {
		//generate first generateTo prime numbers
		var primes = primesGenerator.generateFirst(generateTo);
		var primeWords;

		console.log(primes.length);
		console.log(primes);

		//yield numbers in words
		for (var i = 0; i < primes.length; i++ ) {
			primeWords = numberWriter.write(primes[i]);
		    onYieldCallback.call(this, primes[i], primeWords);
		}
	}

    var myLib  = {
    	yieldFirstPrimesWords: yieldFirstPrimesWords
    };

    //use as node.js module
    if ( typeof module != "undefined" && module.exports) {
        module.exports  = myLib;
    }

    return myLib;

})(primesGenerator, numberWriter);
