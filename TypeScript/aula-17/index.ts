// Tipagem números, strings e booleans

let numero = 20 //Inferência de tipos

const pi = 3.1415;

let nome :string = 'Lara';

let correta : boolean = true

let resultado = numero * pi

// Tipagem de array

// number[] ou Array<number>
const numeros : number[] = [1, 8, 5, 10]

//Evite ao máximo utilizar o Any

// const misto : (number | string)[] = ['Lara', 21, 1.66] // Não é recomendado

const idades : number[] = [];

idades.push(15);
idades.push(76);
idades.push(25);
idades.push(42);
idades.push(21);
idades.push(22);
idades.push(9);

const menorDeIdadade = idades.filter((idade) => idade < 18) ;
console.log(menorDeIdadade)

// Tuplas
const pessoaTupla : [string, number] = ['Lara', 21]

// Tipagens de objetos (Object type)

//Interface 
//Tipo customizado
// interface Person{
//     nome: string;
//     idade : number;
//     profissao?: string; //Parâmetro opcional
//     altura : number;
// }

type Person = {
    nome: string;
    idade : number;
    profissao?: string; //Parâmetro opcional
    altura : number;
}

type MyString = string;

const pessoa : Person = {
    nome: 'Lara',
    idade: 21,
    profissao: 'Desenvolvedora Junior',
    altura: 1.66
}

console.log(pessoa)




// Type aliases
type Criterio = 'greater' | 'lower'

// Union types
function chooseNumber(numero1 : number, numero2 : number, criterio?: Criterio): number{// Literal types

    switch(criterio){
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2 
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2
        default: 
            const numeroAleatorio = Math.random();
            if(numeroAleatorio >= 0.5){
                return numero1
            } else{
                return numero2
            }
}} 

const numeroEscolhido = chooseNumber(10,20, 'greater');
console.log('numero escolhido: ',numeroEscolhido)


function somar(num1: number, num2: number):number{
    return num1 + num2
}

// Void = vazio (Não preenchido)
function somar2(num1: number, num2: number):void{
}

// * Utility Types :  A ideia deles é permitir  que você crie novos tipos a partir de tipos existentes
// 1. Partial (Os paramêtros se tornam opcionais)

type PersonPartial = Partial<Person>;

const outraPessoa : PersonPartial = {
    nome: 'Lara',
    idade: 21
}

// 2. Required  (Todos os parâmetros se torna obrigatórios)
type PersonRequired = Required<Person>

// 3. Pick (Pegar alguns atributos a partir de uma interface existente)

type PersonPicked = Pick<Person, 'nome' | 'idade'>

// 4. Omit (Esconde algum elemento a partir de uma interface existente)

type PersonOmit = Omit<Person , 'profissao'>

// 5. Exclud (Exclui um elemento a partir de uma interface existente)

type CriterioExclud = Exclude<Criterio, 'greater'>

// 6. Record

type Pessoas = Record<string, Person>

const pessoas : Pessoas = {
    '123.456.789-00': {
    nome: 'Fulano',
    idade: 21,
    altura : 1.52
    },
    
    '139.456.789-00': {
    nome: 'Fulano',
    idade: 21,
    altura : 1.52
    }
}