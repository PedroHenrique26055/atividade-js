function verificarNumeros() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    const resultado = (num1 === 30 || num2 === 30 || (num1 + num2) === 30);
    document.getElementById('verificar-numero').textContent = `Resultado: ${resultado}`;
}
