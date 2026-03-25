const prompt = require('readline-sync')
// Expressão 1: Inicialização da variável de controle
// Expressão 2: Condição de permanência do for
// Expressão 3: O incremento da variável de controle


// for(expressão 1; expressão 2; expressão 3){
//     // Escopo do for
// }

for(let i = 0; i < 5; i++){
    console.log(i)
}

//Limpando o console
console.clear()

//Exemplo 

// let maiorNumero = 0;  
// let numeroInformado;

// for(let i = 0; i < 5; i++){
//     numeroInformado = Number(prompt.question('Informe um número positivo: '))

//     if(numeroInformado > maiorNumero){
//         maiorNumero = numeroInformado
//     }
// }

// console.log(`O meio número informado foi ${maiorNumero} `)

// Exemplo percorrendo string com for
const nome = 'Lara'
    // console.log(nome[0])


for(let i = 0; i < nome.length ; i++){
    
    console.log(nome[i])

    if(i === 2){
        break
    }
}

console.clear()

// * ARRAYS

const nota1 = 10;
const nota2 = 8;
const nota3 = 6;

const notaDoAluno = [10, 8, 6]
const pessoa = ['Lara', 21, 1.66, true]

console.log(notaDoAluno)
console.log(pessoa)
console.log(pessoa[0])

pessoa[3] = false
console.log(pessoa)

console.clear()
console.log(pessoa.length)
console.log(notaDoAluno.length)

console.clear()

//Fatiamento de arrys
const numeros = [8, 25, 9, 6, 76, 8]
console.log(numeros.slice(0,2))
console.log(numeros.slice(2))


//Adicionando elementos no final do array
console.clear()
numeros.push(28)
console.log(numeros)

//Adicionando elementos no  início do array
console.clear()
numeros.unshift(-1)
console.log(numeros)
console.clear()

//Pop: remover o elemento que está no final do array 
numeros.pop() // Remove o elemento 28 (do final)
console.log(numeros)
console.clear()

// shift: remover o primeiro elemento do array
numeros.shift() // Remove o elemento -1 (do início)
console.log(numeros)
console.clear()

// Verifica se o elemento existe no array
console.log(numeros.includes(25))
if(numeros.includes(15)){
    console.log('Opa! Existe o número dentro do array de números. ')
}else{
    console.log('O número não foi encontrado dentro do array de números. ')
}
console.clear()

// Indexof. Quando retorna -1 o elemento não existe no array
console.log(numeros.indexOf(76))

// Last Indexof. Retorna o último elemento que possui o valor
console.log(numeros.lastIndexOf(8))
console.clear()

// Percorrendo arrays com for
const arr = [5, 9, 63, 0, 10]

for(let i = 0; i < arr.length; i++)
{
    console.log(`Índice ${i}: ${arr[i]}`)
}
console.clear()

// For-of Percorre os elementos (Itera sobre os valores de estruturas iteráveis)

for(const elemento of arr){
    console.log(elemento)
}
console.clear()

//For-in Percorre os indices( Itera sobre as propriedades enumeráveis de um objeto)
for(const indice in arr){
    console.log(indice)
}