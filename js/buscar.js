async function buscar(){
    console.log("Passei por aqui")

    const resposta = await fetch("https://660f44b2356b87a55c510df5.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json()

    console.log("Resposta: ", respostaDadosAgenda)

    const card = document.getElementById("cards_games")

    card.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        return `
        <div class="cardItem">
        <div class="dataGame"> 
            <img src="../imagens/calendar-solid.svg" alt=""> ${itemAgenda.dataJogo} 
        </div>
        <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
        <div class="descricao">
            <p> <strong>${itemAgenda.nome}</strong> </p>
            <p>${itemAgenda.descricao}</p>
            <p><strong>Gamers: </strong></p>
    
            <div class="gamers">
                <div class="gamerItem">@nick01</div>
                <div class="gamerItem">@nick02</div>
                <div class="gamerItem">@nick03</div>
                <div class="gamerItem">@nick04</div>
            </div>
    
          
        </div>  
        <div class="assistir">
                <a class="assistirItem"> <img src="${itemAgenda.urlAssistir}" alt=""> Assistir </a>
        </div>
    </div> 
        `
    })
}

console.log("Antes de buscar")
buscar();
console.log("Depois de buscar")