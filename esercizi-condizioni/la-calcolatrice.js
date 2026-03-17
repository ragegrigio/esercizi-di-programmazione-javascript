/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

const prompt = require('prompt-sync')();

let a = Number(prompt("scegliere il primo numero. > "));
let b = Number(prompt("scegliere il secondo numero. > "));
let operation = prompt("Scegliere l'operazione. > ");

switch (operation) {
  case "somma":
    console.log(a + b);
    break;
  case "sotrazione":
    console.log(a - b);
    break;
  case "moltiplicazione":
    console.log(a * b);
    break;
  case "divisione":
    console.log(a / b);
    break;
  case "modulo":
    if (Number.isInteger(a) && Number.isInteger(b)) {
      console.log(a % b)
    } else {
    console.log("Inserire solo numeri interi");
    }
    break;
  case "potenza":
    console.log(a ** b);
    break;
  case "media":
    console.log(((a + b) / 2));
    break;
  default:
    console.log('Non presente tra le operazioni consentite');
}