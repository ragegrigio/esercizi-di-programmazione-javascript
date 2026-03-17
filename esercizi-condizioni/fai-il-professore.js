/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

const prompt = require('prompt-sync')();

console.log("Dai, non aver paura.. dimmi che voto hai preso");

let v = prompt();
// votazione(Number(v))

// function votazione(a) {
//     if (a < 18) {
//       console.log("Insufficiente... grave eh");
//       return;
//     } 
//     if (18 <= a && a < 21) {
//       console.log("Meh, sufficiente... sopra il 18 è tutta gloria");
//       return;
//     } 
//     if (21 <= a && a < 24) {
//       console.log("Buono! Come un panino");
//       return;
//     } 
//     if (24 <= a && a < 27) {
//       console.log("Distinto! Onesto");
//       return;
//     } 
//     if (27 <= a && a < 30) {
//       console.log("Ottimo! Bravissimo!");
//       return;
//     } 
//     if (a === 30) {
//       console.log("Eccellente? E vabbè, tutto allora");
//       return;
//     }
// }


switch (v) {
  case "1":
  case "2":
  case "3":
  case "4":
  case "5":
  case "6":
  case "7":
  case "8":
  case "9":
  case "10":
  case "11":
  case "12":
  case "13":
  case "14":
  case "15":
  case "16":
  case "17":
    console.log("Insufficiente... grave eh");
    break;
  case "18":
  case "19":
  case "20":
    console.log("Meh, sufficiente... sopra il 18 è tutta gloria");
    break;
  case "21":
  case "22":
  case "23":
    console.log("Buono! Come un panino");
    break;
  case "24":
  case "25":
  case "26":
    console.log("Distinto! Onesto");
    break;
  case "27":
  case "28":
  case "29":
    console.log("Ottimo! Bravissimo!");
    break;
  case "30":
    console.log("Eccellente? E vabbè, tutto allora");
    break;
  case "0":
    console.log("Belin, non sei stato neanche capace di scrivere il nome?");
    break;
  default:
    console.log('Seh vabbè, MILLE MILIONI!!!');
}