function compararNumeros() {
    let num1 = parseFloat(document.getElementById("numero1-q1").value);
    let num2 = parseFloat(document.getElementById("numero2-q1").value);
    let resultado;

    if (num1 > num2) {
        resultado = `O número ${num1} é maior que ${num2}.`;
    } else if (num1 < num2) {
        resultado = `O número ${num2} é maior que ${num1}.`;
    } else {
        resultado = `Os dois números são iguais.`;
    }

    document.getElementById("resultado-q1").innerText = resultado;
}
