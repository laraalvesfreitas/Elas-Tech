const botaoAumentar = document.querySelector("#aumentar-botao");
const botaoDiminuir = document.querySelector("#diminuir-botao");
const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");


//Eventos no dom (Programação orientada a eventos)

botaoAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);
    contadorElemento.textContent = valorAtual + 1;
    botaoAumentar.classList.add("btn"); //Adiciona a classe "btn" ao elemento
    botaoDiminuir.classList.remove("btn"); //Remove a classe "btn" do elemento
});

botaoDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);
    contadorElemento.textContent = valorAtual - 1;

    botaoDiminuir.classList.add("btn"); //Adiciona a classe "btn" ao elemento
    botaoAumentar.classList.remove("btn"); //Remove a classe "btn" do elemento
});

input.addEventListener('input', () => {
    console.log(input.value);
});

//Adicionando estilos inline no elemento contador
contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";
contadorElemento.style.border = "2px solid black";
contadorElemento.style.width = "15px";

// Manipular Classes CSS

console.log(botaoDiminuir.classList); //Lista de classes do elemento

// botaoAumentar.classList.add("btn"); //Adiciona a classe "btn" ao elemento
// botaoDiminuir.classList.remove("btn"); //Remove a classe "btn" do elemento


// Manipular o tema da página (Branco e Preto)
const themeButton = document.querySelector("#theme");
let darkTheme;

function theme() {
    const body = document.querySelector("body");

    if (darkTheme) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}

// * Definindo uma função que será executada ao carregar o conteúdo da página/janela
window.onload = () => {
    const isDarkThemeLocalStorage = localStorage.getItem('isDarkTheme');
    darkTheme = isDarkThemeLocalStorage === 'true';

    theme(); //Chama a função para aplicar o tema com base no valor armazenado no localStorage
};


themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme; //Inverte o valor de darkTheme (true para false e vice-versa)

    localStorage.setItem('isDarkTheme', darkTheme); //Armazena o tema no localStorage

    theme(); //Chama a função para aplicar o tema com base no valor atualizado de darkTheme

});


