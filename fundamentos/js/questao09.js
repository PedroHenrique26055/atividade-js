function calcularSomaTamanhos() {
    let frase = document.getElementById("frase-soma-tamanho").value;
    let palavras = frase.split(" ");
    let somaTamanhos = palavras.reduce((soma, palavra) => soma + palavra.length, 0);
    
    document.getElementById("soma-tamanhos").innerText = `A soma dos tamanhos das palavras é: ${somaTamanhos}`;
}
