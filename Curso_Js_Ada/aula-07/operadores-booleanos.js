// Operadores Booleanos (Comparações)

const num1 = 10;
const num2 = 15; 

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 == '10');

console.log(num1 !== '10')

console.log(num1 >= num2)

//Conjunções Lógicas 

const idadePessoa1 = 20
const idadePessoa2 = 39

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18)

console.log(!true)

console.log(! (idadePessoa1 >= 18)) //Retorna verdadeiro se a pessoa for menor de idade
