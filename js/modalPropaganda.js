// Exibe o modal ao carregar a página
window.onload = function() {
    var modal = document.getElementById("modal-propaganda");
    var closeBtn = document.querySelector(".close");

    // Exibir o modal
    modal.style.display = "block";

    // Fechar o modal ao clicar no "X"
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Fechar o modal ao clicar fora do conteúdo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};
