function inverterNumero() {
    let numero = document.getElementById("numero-q1").value;
    let numeroInvertido = numero.split('').reverse().join('');
    document.getElementById("resultado-q1").innerText = `Número invertido: ${numeroInvertido}`;
}
