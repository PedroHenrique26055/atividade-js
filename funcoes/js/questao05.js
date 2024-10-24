function encontrarMaiorPalavra() {
    let frase = document.getElementById("frase-q5").value;
    let palavras = frase.split(' ');
    let maiorPalavra = palavras.reduce((a, b) => a.length > b.length ? a : b, '');

    document.getElementById("resultado-q5").innerText = `Maior palavra: ${maiorPalavra}`;
}
