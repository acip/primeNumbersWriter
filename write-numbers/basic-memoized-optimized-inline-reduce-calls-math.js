var nameValues = [
				  1000000000,1000000, 1000, 100,
				  90, 80, 70, 60, 50, 40, 30, 20,
				  19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
				  9, 8, 7, 6, 5, 4, 3, 2, 1];
var nameWords = [
                 'billion', 'million','thousand', 'hundred',
				 'ninety', 'eighty', 'seventy', 'sixty', 'fifty', 'forty', 'thirty', 'twenty',
				 'nineteen', 'eighteen', 'seventeen', 'sixteen', 'fifteen', 'fourteen', 'thirteen', 'twelve', 'eleven', 'ten',
				 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one'];
					
var namesLength = nameValues.length;			  

function write(n) {
		
	if ( n == 0 ) {
		return 'zero';
	};

	if (n < 20) {
		return write.lookupTable[n];
	}
	
	for( var i = 0; i < namesLength; ++i) {
		if ( ~~( n / nameValues[i] ) > 0 ) {
			break;  
		}
	}      
	             
	var remainder = n % nameValues[i];
	var remainderName;
	
	if (n < 100) {
		remainderName = remainder ? '-' + (write.lookupTable[remainder] || write( remainder )) : ''; 
		return write.lookupTable[n] = nameWords[i] + remainderName;
	}
	
	remainderName = remainder ? ' ' + (write.lookupTable[remainder] || write( remainder )) : '';
	                                    
	var div =  ~~( n / nameValues[i] );               
	var divName = (write.lookupTable[div] || write( div )) + ' ';  
	
	return write.lookupTable[n] = divName + nameWords[i] + remainderName;
};

write.lookupTable = write.lookupTable || [];

//pre-seed lookuptable
for (var i = 0; i < namesLength; i++ ) {
	if (nameValues[i] < 100) {
		write.lookupTable[nameValues[i]] = nameWords[i];
	}
}

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
