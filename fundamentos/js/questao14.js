function verificarPalavraNaFrase() {
    let frase = document.getElementById("frase-q14").value;
    let palavra = document.getElementById("palavra-q14").value;
    let resultado = frase.includes(palavra) ? `A palavra "${palavra}" está presente na frase.` : `A palavra "${palavra}" não está presente na frase.`;

    document.getElementById("resultado-q14").innerText = resultado;
}
