function modificarFrase() {
    let frase = document.getElementById("frase-modificar").value;
    let palavras = frase.split(" ");
    let novaFrase = palavras.map(palavra => {
        return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
    }).join(" ");
    
    document.getElementById("frase-modificada").innerText = novaFrase;
}
