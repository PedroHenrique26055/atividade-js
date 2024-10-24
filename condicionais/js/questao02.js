function iterarParOuImpar() {
    let resultado = '';
    for (let i = 0; i <= 50; i++) {
        if (i % 2 === 0) {
            resultado += `${i} é Par\n`;
        } else {
            resultado += `${i} é Ímpar\n`;
        }
    }

    document.getElementById("resultado-q2").innerText = resultado;
}
