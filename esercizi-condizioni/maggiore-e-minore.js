/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

let a = 3;
let b = -1;
let c = 4;
let d = -2;

let max = a;

if (max < b) {
  max = b
} if (max < c) { 
  max = c 
} if (max < d) {
  max = d
}

console.log('massimo = ' + max);

let min = a;

if (min > b) {
  min = b
} if (min > c) { 
  min = c 
} if (min > d) {
  min = d
}

console.log('minimo = ' + min);