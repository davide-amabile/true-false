//  1. chiedere un numeo all'utente
var numero = parseInt(prompt("Inserire un numero"));

var numUtente = numeroPari(numero);

console.log(numUtente);
//
if (numUtente == true) {
  alert("Il numero è pari");
} else {
  alert("il numero è dispari");
}

// funzione: true se il numero è pari se dispari false
function numeroPari(numIns) {
  if ( numIns = numIns%2 == 0) {
    numIns = true;
  }
  return numIns;
}
