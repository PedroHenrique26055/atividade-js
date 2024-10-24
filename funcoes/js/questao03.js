function encontrarMaiorMenor() {
    let numeros = document.getElementById("numeros-q3").value.split(',').map(Number);
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    document.getElementById("resultado-q3").innerText = `Maior: ${maior}, Menor: ${menor}`;
}
