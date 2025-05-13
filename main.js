document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#btn1").addEventListener('click', function () {
        const titulo = document.querySelector("#titulo");
        titulo.innerHTML = "Título Alterado!";
        titulo.classList.toggle("ativo");
    });

    document.querySelector("#btn2").addEventListener('click', function () {
        const img = document.querySelector("#imagem");
        img.src = img.src.includes("cachorro.jpeg") ? "cavalo.jpeg" : "cachorro.jpeg";
        img.style.width = "200px";
    });

    document.querySelector("#btn3").addEventListener('click', function () {
        const texto1 = document.querySelector("#texto1");
        texto1.innerHTML = "Texto 1 Modificado!";
        texto1.classList.toggle("ativo");
    });

    const botoesTexto2 = ["btn4", "btn5", "btn6"];
    const frases = {
        "btn4": "Você apertou o Botão 4",
        "btn5": "Agora apertou o Botão 5.",
        "btn6": "Finalmente apertou o Botão 6."
    };

    for (let id of botoesTexto2) {
        document.querySelector("#" + id).addEventListener('click', function () {
            document.querySelector("#texto2").innerHTML = frases[id];
        });
    }
});