async function cadastrarAgenda() {
    console.table(["Estive por aqui", "Aqui esta nathan", "Olá"])

    const nomeDigitado = document.getElementById("nome_jogo").value
    const dataDigitado = document.getElementById("data_jogo").value
    const descricaoDigitado = document.getElementById("descrição_jogo").value
    const gamersDigitado = document.getElementById("gamers").value
    const imagemDigitado = document.getElementById("url_imagem").value
    const liveDigitado = document.getElementById("url_live").value

    const dadosAgenda = {
        "nome": nomeDigitado,
        "dataJogo": dataDigitado,
        "descricao": descricaoDigitado,
        "gamers": gamersDigitado.split(","),
        "urlimagem": imagemDigitado,
        "urlAssistir": liveDigitado,
    }

    const respostaCadastro = await fetch("https://660f44b2356b87a55c510df5.mockapi.io/agendas", {
    method: "POST" ,
    body: JSON.stringify(dadosAgenda),
    headers: {"Content-type": "application/json; charset=UTF-8"},
})

    if(respostaCadastro.status == 201){
        window.location = "agenda.html"
    } else{
        alert("Ocorreu um erro ao cadastrar")
    }
}
