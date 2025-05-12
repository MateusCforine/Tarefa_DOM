document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#btn1").addEventListener('click', function () {
        const titulo = document.querySelector("#titulo");
        titulo.innerHTML = "Título Alterado!";
        titulo.classList.toggle("ativo");
        document.querySelector("#som1").play();
    });

    document.querySelector("#btn2").addEventListener('click', function () {
        const img = document.querySelector("#imagem");
        img.src = "dog-1.jpeg";
        img.style.width = "300px";
        document.querySelector("#som2").play();
    });

    document.querySelector("#btn3").addEventListener('click', function () {
        const texto1 = document.querySelector("#texto1");
        texto1.innerHTML = "Texto 1 Modificado!";
        texto1.classList.toggle("ativo");
        document.querySelector("#som3").play();
    });

    const botoesTexto2 = ["btn4", "btn5", "btn6"];
    for (let id of botoesTexto2) {
        document.querySelector("#" + id).addEventListener('click', function () {
            document.querySelector("#texto2").innerHTML = this.innerHTML;
        });
    }
});