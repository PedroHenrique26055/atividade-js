function exibirFraseInversa() {
    let frase = document.getElementById("frase-inversa").value;
    let fraseInvertida = frase.split("").reverse().join("");
    
    document.getElementById("frase-invertida").innerText = fraseInvertida;
}
