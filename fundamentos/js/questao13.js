function elevarAoCuboESomar() {
    let numeros = document.getElementById("array-numeros-q13").value.split(',').map(Number);
    let somaCubos = numeros.reduce((soma, num) => soma + Math.pow(num, 3), 0);

    document.getElementById("resultado-q13").innerText = `Soma dos cubos: ${somaCubos}`;
}
