/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

const prompt = require('prompt-sync')();
let number = prompt("Dammi un numero e ti dirò quante cifre ha (massimo 9999)");
countCifre(number)

function countCifre(a) {
    if (a <= 9) {
      console.log('il numero ha 1 cifra');
      return;
    }
    if (a <= 99) {
      console.log('il numero ha 2 cifre');
      return;
    }
    if (a <= 999) {
      console.log('il numero ha 3 cifre');
      return;
    }
    if (a <= 9999) {
      console.log('il numero ha 4 cifre');
      return;
    }
}