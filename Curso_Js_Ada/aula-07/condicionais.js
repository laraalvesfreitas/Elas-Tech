//Maior de idade
const readline = require('readline-sync');
const idade = Number(readline.question('Qual a sua idade? '));

//Estrutura condicional: if/else
if(idade >= 18){
        console.log('Você é maior de idade.')
    }else{
        console.log('Você é menor de idade')
}

// Média aluno
const mediaAluno = 9;
if(mediaAluno >= 7 ){
    console.log('Aprovado');
    console.log('Parabéns!! 👍🐋🐋');
}else if(mediaAluno >=5){
    console.log('Prova Final');
}else{
    console.log('Reprovou');
}

// Permissão para dirigir
const temCNH = true;
const idadePessoa = 16; 
if(idadePessoa >= 18  &&  temCNH == true){
    console.log('Você pode dirigir.')
}else{
    console.log('Você não pode dirigir.')
}