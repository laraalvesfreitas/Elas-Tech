const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null = document.querySelector('#input-localizacao');

const sectionTempoInfo = document.querySelector('#tempo-info');

form?.addEventListener('submit',async (event) => {
    event.preventDefault();

    if(!input || !sectionTempoInfo) return;
    const localizacao = input.value;

    if(localizacao.length < 3){
        alert('Por favor, insira uma localização válida com pelo menos 3 caracteres.');
        return;
    }

    try{


        const resposta =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=97156ed5caa4ab13f068523df2965012&lang=pt_br&units=metric#`)
        const dados = await resposta.json();
    
        const infos = {
            temperatura : Math.round(dados.main.temp),
            local: dados.name,
            icone : `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
        };
    
        sectionTempoInfo.innerHTML = `
        <div class="tempo-dados">
                <h2>${infos.local}</h2>
                <span>${infos.temperatura}°c</span>
        </div>
        <img src="${infos.icone}" >
        `;
    }
    catch(error){
        alert('Ocorreu um erro ao buscar os dados do tempo. Por favor, tente novamente.');
        console.error('Erro ao buscar dados do tempo:', error);
    }
})