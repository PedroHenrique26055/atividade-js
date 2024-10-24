function verificarPalavra() {
    let frase = document.getElementById("frase-q4").value.toLowerCase();
    let palavra = document.getElementById("palavra-q4").value.toLowerCase();
    let resultado = frase.includes(palavra) ? "A palavra está presente." : "A palavra não está presente.";

    document.getElementById("resultado-q4").innerText = resultado;
}
