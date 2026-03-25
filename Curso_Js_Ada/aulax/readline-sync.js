//Uso biblioteca readline-sync
const readline = require('readline-sync')

// Uso com string
let nome = readline.question('Qual seu nome? ')

// Uso com números
let numero = readline.questionInt('Qual o número? ')


console.log(nome)
console.log(numero)