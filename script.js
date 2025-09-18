
// Array global para armazenar as frases conforme o período do dia

let frase = [];

function trocar() {
    let agora = new Date();
    let hora = agora.getHours();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = agora.toLocaleDateString("pt-BR", opcoes);
    let minutos = agora.getMinutes().toString().padStart(2, "0");
    let segundos = agora.getSeconds().toString().padStart(2, "0");
    const diaSemana = agora.getDay();


    let cor;
    let mensagem;
    let dia;
    if (diaSemana >= 1 || diaSemana <=5){
        dia = "Hoje é dia útil, foco nas atividades!";
    } else{ 

        dia = "Hoje é fim de semana, aproveite para descansar!";

    }
    if (hora >= 6 && hora < 12) {
        cor = '#FFD700';
        mensagem = "Bom dia!";
        frase = [
            "Manhã é para quem madruga.",
            "Acorde com determinação, vá dormir com satisfação.",
            "Cada manhã é uma nova oportunidade.",
        ]
    } else if (hora >= 12 && hora < 18) {
        cor = '#FF8C00';
        mensagem = "Boa tarde!";
        frase = [
            "Tarde é para quem trabalha.",
            "A tarde é uma criança que brinca com o sol.",
            "Aproveite a tarde para recarregar suas energias.",
        ]
    } else if (hora >= 18 && hora < 23) {
        cor = '#1E90FF';
        mensagem = "Boa noite";
        frase = [
            "Noite é para quem sonha.",
            "A noite é a parte do dia onde os sonhos ganham vida.",
            "Aproveite a noite para relaxar e refletir sobre o dia.",
        ]
    }

    document.body.style.backgroundColor = cor;
    document.getElementById("titulo").innerHTML = mensagem;



    document.getElementById("hora").innerHTML = hora + ":" + minutos + ":" + segundos;
    document.getElementById("data").innerHTML = dataFormatada;
    document.getElementById("diaSemana").innerHTML = dia;



}

function trocarFrase() {
    // esse if é para garantir que o array frase não está vazio
    // se o array estiver vazio, não faz nada

    if (frase.length > 0) {
        // gera um índice aleatório baseado no tamanho do array de frases
        // e usa esse índice para selecionar uma frase aleatória
        // e exibe essa frase no elemento com id "frase"

        const indiceAleatorio = Math.floor(Math.random() * frase.length);
        document.getElementById("frase").innerHTML = frase[indiceAleatorio];
    }
}


window.onload = function () {
    trocar();
    trocarFrase();
    setInterval(trocar, 1000)
    setInterval(trocarFrase, 5000);
}
