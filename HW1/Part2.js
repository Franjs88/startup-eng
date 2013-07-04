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
    var items = 0;
	for(var i = 2;  items < numPrimos; i++) {
		if(esPrimo(i)) {
			primos.push(i);
            items++;
		}
	}
	return primos;
}
var fs = require('fs');
fs.writeFileSync('out.txt', calculaPrimos(100) );
