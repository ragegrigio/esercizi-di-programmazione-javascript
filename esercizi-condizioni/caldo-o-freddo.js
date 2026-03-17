/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
let a = 3;
let b = -1;
let c = 4;
let d = -2;
let e = 15;
let f = -6;
let g = 7;

let max = a;

if (max < b) {
  max = b
} 
if (max < c) { 
  max = c 
} 
if (max < d) {
  max = d
} 
if (max < e) {
  max = e
} 
if (max < f) {
  max = f
} 
if (max < g) {
  max = g
}

console.log('giornata più calda = ' + max);

let min = a;

if (min > b) {
  min = b
} 
if (min > c) { 
  min = c 
} 
if (min > d) {
  min = d
} 
if (min > e) {
  min = e
} 
if (min > f) {
  min = f
} 
if (min > g) {
  min = g
}

console.log('giornata più fredda = ' + min);