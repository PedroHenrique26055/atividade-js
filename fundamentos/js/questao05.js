function verificarIntervalo() {
    const num1 = parseFloat(document.getElementById('numeroA').value);
    const num2 = parseFloat(document.getElementById('numeroB').value);
    const num3 = parseFloat(document.getElementById('numeroC').value);

    const estaNoIntervalo = (num) => num >= 50 && num <= 99;
    if (estaNoIntervalo(num1) || estaNoIntervalo(num2) || estaNoIntervalo(num3)) {
        document.getElementById('verificar-intervalo').textContent = 'Sucesso: Pelo menos um número está entre 50 e 99';
    } else {
        document.getElementById('verificar-intervalo').textContent = 'Erro: Nenhum número está no intervalo entre 50 e 99';
    }
}
