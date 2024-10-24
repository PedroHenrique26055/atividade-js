function somaParesImpares() {
    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 0; i <= 99; i++) {
        if (i % 2 === 0) {
            somaPares += i;
        } else {
            somaImpares += i;
        }
    }

    let resultado = `Soma dos números pares: ${somaPares}\nSoma dos números ímpares: ${somaImpares}`;
    document.getElementById("resultado-q3").innerText = resultado;
}
