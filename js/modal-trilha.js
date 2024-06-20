// Pega o modal
var trilhaModal = document.getElementById("-trilha-myModal");

// Pega a imagem e insere dentro do modal - usa o "alt" como legenda
var trilhaImg = document.getElementById("-trilha-myImg");
var trilhaModalImg = document.getElementById("-trilha-img01");

trilhaImg.onclick = function(){
    trilhaModal.style.display = "block";
    trilhaModalImg.src = this.src;
}

// Pega o elemento <span> que fecha o modal
var trilhaSpan = document.getElementsByClassName("-trilha-close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
trilhaSpan.onclick = function() { 
    trilhaModal.style.display = "none";
}