if require?
	primesGenerator = primesGenerator || require './primes-generator'
	numberWriter = numberWriter || require './number-writer'


primeWriter = do (primesGenerator, numberWriter) ->

	yieldFirstPrimesWords = (generateTo, onYieldCallback) ->
		primes = primesGenerator.generateFirst generateTo

		console.log primes.length 
		console.log primes

		for prime in primes
			primeWords = numberWriter.write prime
			onYieldCallback.call this, prime, primeWords
		return 1

	myLib = 
		yieldFirstPrimesWords: yieldFirstPrimesWords

	if module?.exports?
             module.exports = myLib
   return myLib
