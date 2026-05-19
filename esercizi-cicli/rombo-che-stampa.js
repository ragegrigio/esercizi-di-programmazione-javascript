/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/



let romboid = 7;
let str = "";
let spaceUp = Math.floor(romboid / 2);
let spaceDown = 0

//parte sopra
for (let i = 0; i <= romboid; i++) {
  if ((i % 2) === 0) {
    continue;
  }
  for (let b = 1; b <= spaceUp; b++) {
    str += " "
  }
  for (let a = 1; a <= romboid; a++) {
    if (a <= i) {
      str += "x";
    }
  }
  spaceUp = spaceUp - 1;
  str += "\n";
}
//parte sotto
for (let c = (romboid - 1); c >= 1; c--) {
  if ((c % 2) === 0) {
    continue;
  }
  for (let e = 0; e <= spaceDown; e++) {
    str += " ";
  }
  for (let d = 1; d < romboid; d++) {
    if (d <= c) {
      str += "x";
    }
  }
  spaceDown = spaceDown + 1;
  str += "\n";
}

console.log(str);