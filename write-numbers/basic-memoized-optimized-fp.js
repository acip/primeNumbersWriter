//cache as property of method
function memoized (fn) {
	memoized.lookupTable = {};   
   return function (n) {   
     return memoized.lookupTable[n] || (
       memoized.lookupTable[n] = fn.apply(this, arguments)
     )
  }
}

var nameValues = [
				  1000000000,1000000, 1000, 100,
				  90, 80, 70, 60, 50, 40, 30, 20,
				  19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
				  9, 8, 7, 6, 5, 4, 3, 2, 1];
var nameWords = [
                 'billion', 'million','thousand', 'hundred',
				 'ninety', 'eighty', 'seventy', 'sixty', 'fifty', 'forty', 'thirty', 'twenty',
				 'nineteen', 'eighteen', 'seventeen', 'sixteen', 'fifteen', 'fourteen', 'thirteen', 'twelve', 'eleven', 'ten',
				 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']

					  
var namesLength = nameValues.length;			  

var write = memoized(function (n) {
	
	if ( n == 0 ) {
		return 'zero';
	};
	
	for( var i = 0; i < namesLength; ++i) {
		if ( Math.floor( n / nameValues[i] ) > 0 ) {
			break;  
		}
	}
	             
	if (n < 20) {
		return nameWords[i];
	}
	
	var remainder = n % nameValues[i];
	
	if (n < 100) {
		return nameWords[i] + (remainder ? '-' + write( remainder ) : '');
	}
	
	return write( Math.floor( n / nameValues[i] ) ) + ' ' + nameWords[i] + (remainder ? ' ' + write( remainder ) : '');
});


var generateTo = 100000;
console.log('writing numners from 0 to ' + generateTo);

console.time("write-numbers");
for (var i = 0; i <= generateTo; i++ ) {
	console.log(write(i));
//	write(i);
}
console.timeEnd("write-numbers");
var util = require('util');
console.log(util.inspect(process.memoryUsage()));
