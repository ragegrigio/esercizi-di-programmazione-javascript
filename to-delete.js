let gamerOneNumberModuled = modulo(5)
let gamerTwoNumberModuled = modulo(-75)

console.log(gamerOneNumberModuled)
console.log(gamerTwoNumberModuled)


























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