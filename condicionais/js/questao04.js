function calcularMedias() {
    let alunos = [
        ["Aluno1", [10, 50, 100]],
        ["Aluno2", [55, 78, 90]],
        ["Aluno3", [60, 65, 80]],
        ["Aluno4", [70, 70, 70]],
        ["Aluno5", [80, 90, 100]]
    ];

    let resultado = '';
    alunos.forEach(aluno => {
        let nome = aluno[0];
        let notas = aluno[1];
        let media = notas.reduce((a, b) => a + b, 0) / notas.length;
        let status = media >= 70 ? "Aprovado" : "Reprovado";
        resultado += `${nome}, média ${media.toFixed(2)}, ${status}\n`;
    });

    document.getElementById("resultado-q4").innerText = resultado;
}
