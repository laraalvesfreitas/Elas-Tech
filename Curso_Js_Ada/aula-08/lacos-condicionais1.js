const readline = require('readline-sync');

// Exemplo 1: saldo
// let saldo = Number(readline.question('Qual é o seu saldo? '));

// while(saldo < 0){
//     saldo = Number(
//         readline.question('Saldo inválido! Por favor, informe novamente. ')
//     );
// }

// console.log(saldo);

// Exemplo 2: Obter nota dos alunos 

// let notaAluno = Number(readline.question('Informe a nota do aluno:'))
// let somaDasNotas = 0; //Acumulador
// let qtdNotasValidas = 0; // Acumulador (Quantidade de notas válidas digitadas. )

// while(notaAluno >= 0){
//     somaDasNotas += notaAluno // Incrementando o acumulador (somaDasNotas)
//     notaAluno = Number(readline.question('Informe a próxima nota do aluno:'))
//     qtdNotasValidas ++ //pós incremento
// }

// let mediaDasNotas = somaDasNotas / qtdNotasValidas 
// console.log(`A média das notas é: ${mediaDasNotas}`)

// console.log(`A soma das notas é ${somaDasNotas}`);


// Exemplo 3 Sortear número 

// Math.randon() gera número entre 0 e 1
// const numeroAleatorio = parseInt(Math.random(1,10) * 10);
// let qtdTentativas = 0;

// let numeroUsuario = Number(readline.question(' Informe um número entre 0 e 10:'))

// console.log(numeroAleatorio)

// while(numeroAleatorio !== numeroUsuario){
//    console.log('Você errou o número, tente novamente!')
//    numeroUsuario=  Number(readline.question('Informe um número entre 0 e 10:'))
//    qtdTentativas ++
// }

// console.log('Parabéns, você acertou o número. O número era:', numeroAleatorio)
// console.log(`Você acertou na ${qtdTentativas}° tentativa`)

// // Loop com contador

// let contador = 0; 

// while(contador <= 5){
//     console.log(contador)
//     contador++;
// }

// Do while 

let saldo;

do{
    saldo = Number(
        readline.question('Informe um saldo válido: ')
    );
}while(saldo < 0)

console.log(saldo);