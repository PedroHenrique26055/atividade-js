function calcularAreaTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        const semiPerimetro = (lado1 + lado2 + lado3) / 2;
        const area = Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3));
        document.getElementById('area-triangulo').textContent = area.toFixed(2);
    } else {
        document.getElementById('area-triangulo').textContent = "Por favor, insira valores válidos.";
    }
}
