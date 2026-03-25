// 1. Lendo um arquivo json

// const fs = require('fs')

// fs.readFile('informacao.json',(erro,lerArquivo) => {
//     if(erro){
//         console.log('ocorreu um erro para ler o arquivo!', erro)
//     }else{
//         //Ler arquivo é um buffer com os dados do arquivo json
//         console.log(JSON.parse(lerArquivo))
//         console.log(String(typeof lerArquivo))

//     }
// })

// 2. Convertendo json, em formato de string, para um objeto 

const jsonString = '{"nome": "Lara"}'
console.log(JSON.parse(jsonString))


console.clear()
// 3. Convertendo um objeto de JS em um json (string). 

const pessoa = {
    nome : "Tony Stark",
    papel : "Homem de Ferro"
}

console.log(JSON.stringify(pessoa));