function abrirJanela() {
    // URL do site
    var url = "https://app3.evoluaeducacao.com.br/";

    // Configurações da nova janela
    var janelaConfig = "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=600,height=400";

    // Abrir o site em uma nova janela
    window.open(url, "_blank", janelaConfig);
}

let depoimentoAtual = 1;

    function mostrarDepoimento(numero) {
        // Esconde o depoimento atual
        document.getElementById(`depoimento${depoimentoAtual}`).classList.remove('active');
        document.getElementById(`botao${depoimentoAtual}`).classList.remove('background-green');
        // Mostra o novo depoimento
        document.getElementById(`depoimento${numero}`).classList.add('active');
        document.getElementById(`botao${numero}`).classList.add('background-green');
        depoimentoAtual = numero;
    }