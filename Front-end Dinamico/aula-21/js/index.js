const botaoAumentar = document.querySelector("#aumentar-botao");
const botaoDiminuir = document.querySelector("#diminuir-botao");
const contadorElemento = document.querySelector("#contador");


//Eventos no dom (Programação orientada a eventos)
    
    botaoAumentar.addEventListener('click', (event) =>{
        const valorAtual = Number(contadorElemento.textContent);
        contadorElemento.textContent = valorAtual + 1;
    });

    botaoDiminuir.addEventListener('click', (event) =>{
        const valorAtual = Number(contadorElemento.textContent);
        contadorElemento.textContent = valorAtual - 1;
    });

    