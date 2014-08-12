var generateTo = 1000;
var pre = document.createElement("pre");
primesWriter.yieldFirstPrimesWords(generateTo, function(n, nWords) {
	pre.appendChild(document.createTextNode(nWords + "\n"));
});

document.body.appendChild(pre);