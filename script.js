const entrada = document.getElementById("entrada");
const entrarSite = document.getElementById("entrarSite");
const musica = document.getElementById("musicaFundo");
const botaoMusica = document.getElementById("botaoMusica");

entrarSite.addEventListener("click", function () {
    entrada.style.display = "none";

    musica.volume = 0.3;

    musica.play()
        .then(() => {
            botaoMusica.textContent = "❚❚";
        })
        .catch(() => {
            botaoMusica.textContent = "♫";
        });
});

botaoMusica.addEventListener("click", function () {
    if (musica.paused) {
        musica.play();
        botaoMusica.textContent = "❚❚";
    } else {
        musica.pause();
        botaoMusica.textContent = "♫";
    }
});