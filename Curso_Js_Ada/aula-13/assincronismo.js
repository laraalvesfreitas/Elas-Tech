const fs = require('fs')

// * 1. Callbacks
// console.log('ANTES da função de ler o arquivo...')

// //Função assíncrona (Ler um arquivo leva um tempo)
// fs.readFile('aula-13/arquivo.txt', (erro, conteudoDoArquivo) => {
//     if(erro){
//         console.log('Ocorreu um erro ao tentar ler o arquivo:', erro)
//     }else{
//         console.log(String(conteudoDoArquivo))
//     }
// })

// console.log('DEPOIS da função de ler o arquivo...')


// Exemplo 02: setTimeOut(Função que cria um timer) 

// console.log('ANTES do setTimeOut')

// setTimeout(() => {
//     console.log('Isso aqui vai ser executado apos 2 segundos')
// } ,2 * 1000)

// console.log('DEPOIS do setTimeOut')


// * 2. Promises (Promessas)

// console.log('ANTES da criação da promisse')

//  craindo uma promessa

function lerArquivoPromise(){

    return new Promise((resolve,reject) => {

    fs.readFile('aula-13/arquivo.txt', (erro, conteudoDoArquivo) => {
    if(erro){
        reject('Ocorreu um erro ao tentar ler o arquivo:', erro)
    }else{
        resolve(String(conteudoDoArquivo))
    }
    });
});

}

/*
//Foco a partir daqui...
lerArquivoPromise()
promessa.then((retornoDoResolveDaPromise) => {
    console.log('Deu certo. ', retornoDoResolveDaPromise)
    }).catch((erro) => {
        console.log('Deu ruim. ', erro);
    // } 
    })*/



// * 3 - Async/await 

async function leituraDeDados(){
    console.log('Isso é executado antes da promisse ser resolvida');
    try{
        const dadosDoArquivoLido = await lerArquivoPromise(); //espera a promessa ser resolvida para avançar no código
        console.log(dadosDoArquivoLido);
        console.log('Isso é executado DEPOIS da promisse ser resolvida');
    }catch(erro){
        console.log(erro)
        console.log('Isso aqui é executado depois da promessa (com erro).')
    }finally{
        console.log('Dentro do finally!')
    }
}
leituraDeDados();

