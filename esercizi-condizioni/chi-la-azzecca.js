/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/


const prompt = require('prompt-sync')();

console.log("Chi si avvicina di più?")
let gamerOne = prompt("Giocatore 1 scegli il tuo numero. > ");
console.clear();
let gamerTwo = prompt("Giocatore 2 scegli il tuo numero. > ");
let randomNumber = Math.floor(Math.random() * (100-1) + 1);

console.log(gamerOne);
console.log(gamerTwo);
console.log(randomNumber);

let checkGamerOne = modulo(randomNumber-gamerOne);
let checkGamerTwo = modulo(randomNumber-gamerTwo);

if (randomNumber === gamerOne) {
  console.log('Giocatore 1 ha azzeccato il numero casuale')
}
if (randomNumber === gamerTwo) {
  console.log('Giocatore 2 ha azzeccato il numero casuale')
}

let isGamerOneCloser = checkGamerOne < checkGamerTwo
if (isGamerOneCloser === true) {
  console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!")
}
if (isGamerOneCloser === false) {
  console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!")
}
if (checkGamerOne === checkGamerTwo) {
  console.log("Nessuno dei due ha azzeccato il numero casuale ed entrambi si sono avvicinati allo stesso modo!")
}



/**
 * Dato un numero in imput, fare il return dello stesso numero sotto modulo
 * es. 
 * input = 5 
 * output = 5
 * 
 * input = -7
 * output = 7
 */
function modulo(numero) {
  if (numero < 0) {
  numero=numero*(-1)
}
  return numero;
}