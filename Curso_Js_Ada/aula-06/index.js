//Utilize sempre Camel case no javascript

// Javascript possui tipagem dinâmica: infere os tipos de dados
// Javascript possui tipagem fraca 


var nomeDoAluno = 'Lara Alves'; //string (Texto): Utilize sempre aspas
var idade = 21; //number
var altura = 1.66; //number
var estudando = true //boolean (booleano: Verdadeiro ou falso)


console.log(nomeDoAluno, typeof nomeDoAluno);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

var semConteudo; //Declarando uma variável

console.log(semConteudo);

var curso = 'Front-end React', 
    topico = 'Javascript Básico I';

console.log(curso,topico);

// ! Não utilizar o var nos códigos Javascript 

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// ! mediaDoAluno = 5; Não é permitido!

console.log(notaDoAluno);
console.log(mediaDoAluno);