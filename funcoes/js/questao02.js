function contarVogaisConsoantes() {
    let frase = document.getElementById("frase-q2").value.toLowerCase();
    let vogais = 'aeiou';
    let numVogais = 0;
    let numConsoantes = 0;

    for (let letra of frase) {
        if (vogais.includes(letra)) {
            numVogais++;
        } else if (letra >= 'a' && letra <= 'z') {
            numConsoantes++;
        }
    }

    document.getElementById("resultado-q2").innerText = `Vogais: ${numVogais}, Consoantes: ${numConsoantes}`;
}
