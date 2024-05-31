 // Função para mostrar o modal correspondente ao link clicado
 function mostrarModal(modal) {
    modal.style.display = 'block';
}

// Adicione um evento de clique para cada link de Cartão de Crédito
var linksCartao = document.querySelectorAll('a[href^="#modal-cartao"]');
linksCartao.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        var modalId = this.getAttribute('href').substring(1);
        var modal = document.getElementById(modalId);
        mostrarModal(modal);
    });
});

// Adicione um evento de clique para cada link de Boleto
var linksBoleto = document.querySelectorAll('a[href^="#modal-boleto"]');
linksBoleto.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        var modalId = this.getAttribute('href').substring(1);
        var modal = document.getElementById(modalId);
        mostrarModal(modal);
    });
});

// Obtenha os elementos de fechar os modais
var spansClose = document.querySelectorAll('.modal .close');
spansClose.forEach(function(span) {
    span.addEventListener('click', function() {
        this.parentNode.parentNode.style.display = 'none';
    });
});

// Adicione um evento de clique fora dos modais para fechá-los
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});