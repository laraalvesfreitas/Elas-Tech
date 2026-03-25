// Aula 19 POO
interface Ipessoa{
    nome: string;
    idade : number;
    altura: number;
    Dormir:() => (void);
}

// Classe : Abstração 
// Definindo a abstração de uma pessoa
class Pessoa implements Ipessoa{
//Atributos: características (variáveis)
// * private: só pode ser acessada dentro da classe
// * readonly: só pode ser lida, não pode ser alterada depois de definida
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;
    
//Métodos: ação (funções)
//Método construtor:
constructor(nome: string, idade: number, altura: number, cpf: string){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
}
    Dormir(){
        console.log("Dormindo...");
    }
    // accessor: geter
    get cpf(): string{
        return this._cpf
    }
    // accessor: seter
    set cpf(newCpf: string){
        if(newCpf.length !== 14){
            // Lançando um erro caso o CPF não tenha 14 caracteres
            throw new Error("O CPF deve conter 14 caracteres");
        }
        this._cpf = newCpf;
    }
    
    //* Accesor são métodos porém são usados como se fossem atributos, ou seja, não precisam ser chamados como função, basta acessar o nome do método e ele irá retornar o valor definido no get ou set.
}

// Herança: Professor é uma classe filha de Pessoa, ou seja, Professor herda os atributos e métodos de Pessoa, além de ter seus próprios atributos e métodos.
class Professor extends Pessoa{
    codigo : string;

    constructor(nome: string, idade: number, altura: number,cpf: string, codigo: string){
        //* super é usado para chamar o construtor da classe pai (Pessoa). 
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }

    Ensinar(){
        console.log("Ensinando...");
    }
}

// Criando/instanciando uma pessoa (indivíduo/objeto) a partir da  definição da classe Pessoa 
const pessoa1 = new Pessoa('Lara', 21, 1.66, '123.456.789-00');
const pessoa2 = new Pessoa('Maria', 11, 1.50, '696.200.170-30');

console.log(pessoa1);
console.log(pessoa1.nome , pessoa1.idade);

pessoa1.Dormir();

console.log(pessoa2.cpf);
pessoa2.Dormir();

pessoa2.cpf = '111.222.333-44';

console.log(pessoa2.cpf);

// Atributo da classe Professor
const professor1 = new Professor('João', 35, 1.80, '987.654.321-00', 'PROF123');
console.log(professor1);
professor1.Dormir();
professor1.Ensinar();

//Polimorfismo: 
console.log(pessoa1 instanceof Pessoa); 
console.log(pessoa1 instanceof Professor);
console.log(professor1 instanceof Pessoa);
console.log(professor1 instanceof Professor);