/**
 * JavaScript BitArray - v0.2.0
 *
 * Licensed under the revised BSD License.
 * Copyright 2010-2012 Bram Stein
 * All rights reserved.
 */

/**
 * Creates a new empty BitArray with the given length or initialises the BitArray with the given hex representation.
 */
var BitArray = function(size, hex) {
    this.values = [];
    var max = Math.ceil(size / 32); 
	
    for (var i = 0; i < max; ++i) {
        this.values[i] = 0;
    }
};

/**
 * Sets the bit at index to true
 */
BitArray.prototype.set = function(index) {
    var i = ~~(index / 32);    
    this.values[i] |= 1 << index - (i << 5);
};

/**
 * Returns the value of the bit at index (boolean.)
 */
BitArray.prototype.get = function(index) {
    var i = ~~(index / 32);
    return !!(this.values[i] & (1 << index - (i << 5)));
};

/**
 * Returns a string representation of the BitArray with bits
 * in logical order.
 */
BitArray.prototype.toString = function() {
    return this.toArray().map(function(value) {
        return value ? '1' : '0';
    }).join('');
};


module.exports = BitArray;