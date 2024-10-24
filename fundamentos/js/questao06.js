function numeroComMaisOcorrencias() {
    let numeros = document.getElementById("array-numeros").value.split(',').map(Number);
    let ocorrencias = {};
    let numeroMaisFrequente;
    let maxOcorrencias = 0;

    numeros.forEach(num => {
        ocorrencias[num] = (ocorrencias[num] || 0) + 1;
        if (ocorrencias[num] > maxOcorrencias) {
            maxOcorrencias = ocorrencias[num];
            numeroMaisFrequente = num;
        }
    });

    document.getElementById("numero-mais-frequente").innerText = `O número com mais ocorrências é: ${numeroMaisFrequente} (${maxOcorrencias} vezes)`;
}
