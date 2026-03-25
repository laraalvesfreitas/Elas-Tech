// Fetch API

// then /catch

// fetch('https://viacep.com.br/ws/30628270/json/')
//     .then((resposta) => {
//         resposta.json().then((dados) => console.log(dados));
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

// async /await 

async function obterDadosDoCep(params) {
    try{
        const resposta = await fetch('https://viacep.com.br/ws/30628270/json/')
        const dados = await resposta.json()
        console.log(dados)
    }catch (erro){
        console.log('Deu errado.', erro)
    }finally{
        console.log('Terminou a requisição')
    }
}

obterDadosDoCep();