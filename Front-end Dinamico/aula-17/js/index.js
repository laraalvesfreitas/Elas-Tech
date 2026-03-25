// Selecionar os elementos HTML da nossa  página utilizando o documet
 
// 1. Pelo nome da tag
const todosP = document.getElementsByTagName('p');
console.log(todosP);

// 2. Pelo nome da classe
const todosClasseParagrafo = document.getElementsByClassName('paragrafo');
console.log(todosClasseParagrafo);

// 3. Pelo nome da tag
const emailInput = document.getElementsByName('email');
console.log(emailInput);

// 4. Pelo id da tag
const logoJsImg = document.getElementById('js-logo');
console.log(logoJsImg);

// 5. Query selector
const imagem = document.querySelector('body > img#js-logo');
console.log(imagem);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);


console.clear();


const primeiroParagrafo = document.querySelector('p.paragrafo');
console.log(primeiroParagrafo);

// Exibindo o conteúdo do parágrafo selecionado no console
console.log('textContent:' , primeiroParagrafo.textContent);
// Exibindo o conteúdo do parágrafo selecionado no console, incluindo as tags HTML
console.log('innerHTML:' , primeiroParagrafo.innerHTML);

// Modificando o conteúdo do parágrafo selecionado

primeiroParagrafo.textContent = 'Texto modificado utilizando textContent';

// Modificando o conteúdo do parágrafo selecionado, incluindo as tags HTML
primeiroParagrafo.innerHTML = 'Texto modificado utilizando innerHTML. <strong>Conteúdo em negrito.</strong>';
console.clear();

// Value só existe em campos de input e textarea. Pega o valor que o usuário digitou
emailInput[0].value = 'laraalves624@gmail.com';
console.log(emailInput[0].value);

// Criando um elemento HTML na página

const listaUl = document.querySelector('ul#lista'); 
const listaLis = document.querySelectorAll('ul > li');

const novaTagLi = document.createElement('li'); // Criando uma nova tag li vazia
novaTagLi.textContent = 'Segundo Item'; // Adicionando um texto dentro da tag li criada

// listaUl.appendChild(novaTagLi); // Adicionando a nova tag li como filha da tag ul selecionada
listaUl.insertBefore( novaTagLi,listaLis[1]); // Inserindo o segundo item antes do primeiro item da lista


listaUl.removeChild(listaLis[0]); // Removendo o primeiro item da lista