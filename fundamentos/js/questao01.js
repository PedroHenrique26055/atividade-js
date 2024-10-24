function exibirDataHora() {
    const dataHoraElemento = document.getElementById('data-hora');
    const dataAtual = new Date();

    const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const diaSemana = diasDaSemana[dataAtual.getDay()];

    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    dataHoraElemento.textContent = `Hoje é: ${diaSemana}. A hora atual é: ${hora}:${minutos}:${segundos}.`;
}
