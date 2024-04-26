async function buscar(){
    const resposta = await fetch("https://660f44b2356b87a55c510df5.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json()

    console.log("Resposta: ", respostaDadosAgenda)

    const card = document.getElementById("cards_games")

    card.innerHTML = respostaDadosAgenda.map((itemAgenda) => {

        var data = new Date(itemAgenda.dataJogo)

        var dia = data.getDate().toString().padStart(2, '0');
        var mes = data.getMonth().toString().padStart(2, '0');
        var hora = data.getHours().toString().padStart(2, '0');
        var minutos = data.getMinutes().toString().padStart(2, '0');

        const dataFormatada = `${dia}/${mes} - ${hora}:${minutos}`;

        return `
        <div class="cardItem">
        <div class="dataGame"> 
            <img src="../imagens/calendar-solid.svg" alt=""> ${dataFormatada} 
        </div>
        <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
        <div class="descricao">
            <p> <strong>${itemAgenda.nome}</strong> </p>
            <p>${itemAgenda.descricao}</p>
            <p><strong>Gamers: </strong></p>
    
            <div class="gamers">
                ${itemAgenda.gamers.map((gamerItem) => {
                    return `<div class="gamerItem">@${gamerItem}</div>`
                })}
            </div>
    
          
        </div>  
        <div class="assistir">
                <a class="assistirItem" href="${itemAgenda.urlAssistir}"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
        </div>
    </div> 
        `
    }).join('')
}

buscar();