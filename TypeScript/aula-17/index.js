// Tipagem números, strings e booleans
let numero = 20; //Inferência de tipos
const pi = 3.1415;
let nome = 'Lara';
let correta = true;
let resultado = numero * pi;
// Tipagem de array
// number[] ou Array<number>
const numeros = [1, 8, 5, 10];
//Evite ao máximo utilizar o Any
// const misto : (number | string)[] = ['Lara', 21, 1.66] // Não é recomendado
const idades = [];
idades.push(15);
idades.push(76);
idades.push(25);
idades.push(42);
idades.push(21);
idades.push(22);
idades.push(9);
const menorDeIdadade = idades.filter((idade) => idade < 18);
console.log(menorDeIdadade);
// Tuplas
const pessoaTupla = ['Lara', 21];
const pessoa = {
    nome: 'Lara',
    idade: 21,
    profissao: 'Desenvolvedora Junior',
    altura: 1.66
};
console.log(pessoa);
// Union types
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5) {
                return numero1;
            }
            else {
                return numero2;
            }
    }
}
const numeroEscolhido = chooseNumber(10, 20, 'greater');
console.log('numero escolhido: ', numeroEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
// Void = vazio (Não preenchido)
function somar2(num1, num2) {
}
const outraPessoa = {
    nome: 'Lara',
    idade: 21
};
const pessoas = {
    '123.456.789-00': {
        nome: 'Fulano',
        idade: 21,
        altura: 1.52
    },
    '139.456.789-00': {
        nome: 'Fulano',
        idade: 21,
        altura: 1.52
    }
};
export {};
//# sourceMappingURL=index.js.map