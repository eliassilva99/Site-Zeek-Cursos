// Função para realizar a contagem de idade
function countup(start, end, elementId) {
    let count = start;
  
    function updateCounter() {
      const countupElement = document.getElementById(elementId);
      if (count === end) {
        countupElement.textContent = "+ " + end + " Anos";
      } else {
        countupElement.textContent = "+ " + count + " Anos";
        count++;
        setTimeout(updateCounter, 80); // atualiza a cada 80 milissegundos
      }
    }
  
    updateCounter();
  }
  
  // Função para realizar a contagem de polos
  function countupPolos(start, end, elementId) {
    let count = start;
  
    function updateCounter() {
      const countupElement = document.getElementById(elementId);
      if (count === end) {
        countupElement.textContent = end;
      } else {
        countupElement.textContent = count;
        count++;
        setTimeout(updateCounter, 800); // atualiza a cada 800 milissegundos
      }
    }
  
    updateCounter();
  }
  
  // Função para realizar a contagem de alunos
  function countupAlunos(start, end, elementId) {
    let count = start;
  
    function updateCounter() {
      const countupElement = document.getElementById(elementId);
      if (count >= end) {
        countupElement.textContent = "+ " + end.toLocaleString();
      } else {
        countupElement.textContent = "+ " + count.toLocaleString();
        count += 100; // aumenta de 100 em 100
        setTimeout(updateCounter, 8); // atualiza a cada 8 milissegundos
      }
    }
  
    updateCounter();
  }
  
  // Função para realizar a contagem de cursos
  function countupCursos(start, end, elementId) {
    let count = start;
  
    function updateCounter() {
      const countupElement = document.getElementById(elementId);
      if (count === end) {
        countupElement.textContent = "+ " + end;
      } else {
        countupElement.textContent = "+ " + count;
        count++;
        setTimeout(updateCounter, 80); // atualiza a cada 80 milissegundos
      }
    }
  
    updateCounter();
  }
  
  // Função para verificar se o elemento está visível na tela
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Função para iniciar a contagem quando o elemento estiver visível
  function startCountWhenVisible(elementId, callback) {
    const element = document.getElementById(elementId);
    let alreadyStarted = false;
  
    function handleScroll() {
      if (!alreadyStarted && isElementInViewport(element)) {
        callback();
        alreadyStarted = true;
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  }
  
  // Chamar a função para iniciar a contagem quando a parte desejada for visível
  startCountWhenVisible('countup-idade', () => {
    countup(0, 27, 'countup-idade');
  });
  
  startCountWhenVisible('countup-polos', () => {
    countupPolos(0, 3, 'countup-polos');
  });
  
  startCountWhenVisible('countup-alunos', () => {
    countupAlunos(0, 15000, 'countup-alunos');
  });
  
  startCountWhenVisible('countup-cursos', () => {
    countupCursos(0, 33, 'countup-cursos');
  });
  