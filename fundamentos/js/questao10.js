function converterNome() {
    let nomeCompleto = document.getElementById("nome-completo").value;
    let partes = nomeCompleto.split(" ");
    if (partes.length < 2) {
        document.getElementById("nome-convertido").innerText = "Por favor, insira nome e sobrenome.";
        return;
    }

    let nomeConvertido = partes.slice(-1)[0];  // ultimo nome
    for (let i = partes.length - 2; i >= 0; i--) {
        nomeConvertido += " " + partes[i].charAt(0).toUpperCase() + ".";
    }

    document.getElementById("nome-convertido").innerText = nomeConvertido;
}
