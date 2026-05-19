const { getRandomNumber } = require("../commonFunction");

let arrayNumber = [2, 14, 53, 76];
let arrayAnimali = ["Kuro", "Hachi", "Ritsu", "Oona"]
arrayAnimali.push('Gatto Amarillo')
arrayAnimali.pop();

console.log(arrayNumber[1])
console.log(arrayAnimali)


for(i=0; i< arrayAnimali.length; i++){
 console.log(arrayAnimali[i])
}

console.log(arrayAnimali[(arrayAnimali.length - 1)])


let somma = 0;

for(i=0; i< arrayNumber.length; i++) {
    somma += arrayNumber[i]
}

console.log(somma)

console.log(getRandomNumber(100))