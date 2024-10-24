function unirElementos() {
    let elementos = document.getElementById("array-elementos-q12").value.split(',');
    let resultado = elementos.join('#');

    document.getElementById("resultado-q12").innerText = `Elementos unidos: ${resultado}`;
}
