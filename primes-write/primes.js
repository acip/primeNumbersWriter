'use strict'
var primesWriter = require('./lib/primes-writer');

var generateTo = 1000;
primesWriter.yieldFirstPrimesWords(generateTo, function(n, nWords) {
	console.log(nWords);
})