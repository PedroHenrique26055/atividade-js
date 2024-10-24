function ultimosElementos() {
    let numeros = document.getElementById("array-numeros-q11").value.split(',').map(Number);
    let n = parseInt(document.getElementById("n-elementos").value);
    let ultimos = numeros.slice(-n);

    document.getElementById("resultado-q11").innerText = `Últimos ${n} elementos: [${ultimos.join(', ')}]`;
}
