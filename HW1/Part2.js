#!/usr/bin/env node

//First 100 prime numbers

function esPrimo(i) {
    var maximo = Math.sqrt(i);
	for( var j = 2; j <= maximo; j++) {
		if (i % j === 0) {
			return false;
		}
	}
	return true;
}

//Recibe el numero de primos que se desean calcular
function calculaPrimos(numPrimos) {
	var primos = [];
	for(var i = 2; i < numPrimos; i++) {
		if(esPrimo(i)) {
			primos.push(i);
			--numPrimos;
		}
	}
	return primos;
}
var fs = require('fs');
fs.writeFileSync('out.txt', calculaPrimos(100) );
