function ordenarNumeros() {
    let numeros = document.getElementById("array-numeros-q15").value.split(',').map(Number);
    numeros.sort((a, b) => a - b);

    document.getElementById("resultado-q15").innerText = `Números ordenados: [${numeros.join(', ')}]`;
}
