function toggleContent(event, clickedElement) {
    event.stopPropagation(); // Evita que o clique se propague para o documento
  
    var content = clickedElement.querySelector('.info-content');
  
    // Verifica se o conteúdo clicado já está visível
    var isContentVisible = content.style.display === 'block';
  
    // Esconde todos os conteúdos
    document.querySelectorAll('.info-content').forEach(function(content) {
      content.style.display = 'none';
    });
  
    // Alterna o conteúdo clicado
    if (!isContentVisible) {
      content.style.display = 'block';
    }
  }
  
  // Evento de clique no documento para esconder conteúdos ao clicar fora
  document.addEventListener('click', function(event) {
    var allContents = document.querySelectorAll('.info-content');
    var isClickInside = false;
  
    // Verifica se o clique foi dentro de um .info-item
    document.querySelectorAll('.info-item').forEach(function(item) {
      if (item.contains(event.target)) {
        isClickInside = true;
      }
    });
  
    // Se o clique foi fora de um .info-item, esconde todo o conteúdo
    if (!isClickInside) {
      allContents.forEach(function(content) {
        content.style.display = 'none';
      });
    }
  });
  