
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 4000)

function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}

function abrirJanela(url) {
    // Define as dimensões e posição da nova janela
    var largura = 1000;
    var altura = 600;
    var left = (screen.width - largura) / 2;
    var top = (screen.height - altura) / 2;

    // Abre a nova janela usando window.open
    window.open(url, '_blank', "width=1000,height=600");
}


function mostrarBotao() {
    var seletorCidades = document.getElementById("seletorCidades");
    var btnIniciarMatricula = document.getElementById("btnIniciarMatricula");

    // Resetar o botão
    btnIniciarMatricula.style.display = "none";

    // Obter o valor selecionado no menu
    var cidadeSelecionada = seletorCidades.value;

    // Atualizar o botão com o link correspondente
    switch (cidadeSelecionada) {
        case "descalvado":
            btnIniciarMatricula.setAttribute("data-link", "https://wa.me/19992671617");
            break;
        case "ibate":
            btnIniciarMatricula.setAttribute("data-link", "https://wa.me/16996294928");
            break;
        case "ribeirao_bonito":
            btnIniciarMatricula.setAttribute("data-link", "https://wa.me/16999940880");
            break;
        default:
            break;
    }

    // Exibir o botão apenas se uma opção válida for selecionada
    if (cidadeSelecionada !== "") {
        btnIniciarMatricula.style.display = "block";
    }
}

function abrirMatricula() {
    var btnIniciarMatricula = document.getElementById("btnIniciarMatricula");
    var linkMatricula = btnIniciarMatricula.getAttribute("data-link");

    if (linkMatricula) {
        window.open(linkMatricula, '_blank', "width=800,height=400");
    }
}

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = 6;
let currentImageIndex = 0;
let modalImages = [];

function openModal(event) {
    const clickedImage = event.target;
    const modal = document.getElementById('modal2');
    const modalImage = document.getElementById('modalImage2');

    modal.style.display = 'block';
    modalImage.src = clickedImage.src;
    currentImageIndex2 = Array.from(clickedImage.parentNode.children).indexOf(clickedImage);
    modalImages2 = Array.from(document.querySelector('.carousel2').children);
    updateModalButtonsVisibility();
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function updateCarousel() {
    const translateValue = -currentIndex * (100 / totalSlides);
    carousel.style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}


// Automação: Mudar automaticamente os slides a cada 3 segundos (3000 milissegundos)
setInterval(nextSlide, 3500);

const carousel2 = document.querySelector('.carousel2');
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');

let currentIndex2 = 0;
const totalSlides2 = 6;
let currentImageIndex2 = 0;
let modalImages2 = [];


function updateCarousel2() {
    const translateValue2 = -currentIndex2 * (100 / totalSlides2);
    carousel2.style.transform = `translateX(${translateValue2}%)`;
}

function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    updateCarousel2();
}

function prevSlide2() {
    currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
    updateCarousel2();
}

function openModal2(event) {
    const clickedImage = event.target;
    const modal = document.getElementById('modal2');
    const modalImage = document.getElementById('modalImage2');

    modal.style.display = 'block';
    modalImage.src = clickedImage.src;
    currentImageIndex2 = Array.from(clickedImage.parentNode.children).indexOf(clickedImage);
    modalImages2 = Array.from(document.querySelector('.carousel2').children);
    updateModalButtonsVisibility();
}

function closeModal2() {
    document.getElementById('modal2').style.display = 'none';
}

function prevImage2() {
        currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
        updateModalImage2();
        const modalImage = document.getElementById('modalImage2');
    currentImageIndex2 = (currentImageIndex2 - 1 + 6) % 6;
    modalImage.src = modalImages2[currentImageIndex2].src;
    updateModalButtonsVisibility();
    }

    function nextImage2() {
        currentIndex2 = (currentIndex2 + 1) % totalSlides2;
        updateModalImage2();
        const modalImage = document.getElementById('modalImage2');
    currentImageIndex2 = (currentImageIndex2 + 1) % 6;
    modalImage.src = modalImages2[currentImageIndex2].src;
    updateModalButtonsVisibility();
    }

    function updateModalButtonsVisibility() {
        const prevButton = document.querySelector('.prev2');
        const nextButton = document.querySelector('.next2');
    
        // Mostrar ou ocultar os botões com base na posição da imagem atual
        prevButton.style.display = currentImageIndex2 === 0 ? 'none' : 'block';
        nextButton.style.display = currentImageIndex2 === 5 ? 'none' : 'block';
    }

    function updateModalImage2() {
        const modalImage2 = document.getElementById('modalImage2');
        modalImage2.src = document.querySelector('.carousel2 img:nth-child(' + (currentIndex2 + 1) + ')').src;
    }

// Automação: Mudar automaticamente os slides a cada 2.5 segundos (2500 milissegundos)
setInterval(nextSlide2, 2500);


const carousel3 = document.querySelector('.carousel3');
const prevButton3 = document.querySelector('.prev3');
const nextButton3 = document.querySelector('.next3');

let currentIndex3 = 0;
const totalSlides3 = 6;
let currentImageIndex3 = 0;
let modalImages3 = [];

function updateCarousel3() {
    const translateValue3 = -currentIndex3 * (100 / totalSlides3);
    carousel3.style.transform = `translateX(${translateValue3}%)`;
}

function nextSlide3() {
    currentIndex3 = (currentIndex3 + 1) % totalSlides3;
    updateCarousel3();
}

function prevSlide3() {
    currentIndex3 = (currentIndex3 - 1 + totalSlides3) % totalSlides3;
    updateCarousel3();
}

function openModal3(event) {
    const clickedImage = event.target;
    const modal = document.getElementById('modal3');
    const modalImage = document.getElementById('modalImage3');

    modal.style.display = 'block';
    modalImage.src = clickedImage.src;
    currentImageIndex3 = Array.from(clickedImage.parentNode.children).indexOf(clickedImage);
    modalImages3 = Array.from(document.querySelector('.carousel3').children);
    updateModalButtonsVisibility3();
}

function closeModal3() {
    document.getElementById('modal3').style.display = 'none';
}

function prevImage3() {
    currentIndex3 = (currentIndex3 - 1 + totalSlides3) % totalSlides3;
    updateModalImage3();
    const modalImage = document.getElementById('modalImage3');
    currentImageIndex3 = (currentImageIndex3 - 1 + 6) % 6;
    modalImage.src = modalImages3[currentImageIndex3].src;
    updateModalButtonsVisibility3();
}

function nextImage3() {
    currentIndex3 = (currentIndex3 + 1) % totalSlides3;
    updateModalImage3();
    const modalImage = document.getElementById('modalImage3');
    currentImageIndex3 = (currentImageIndex3 + 1) % 6;
    modalImage.src = modalImages3[currentImageIndex3].src;
    updateModalButtonsVisibility3();
}

function updateModalButtonsVisibility3() {
    const prevButton = document.querySelector('.prev3');
    const nextButton = document.querySelector('.next3');

    // Mostrar ou ocultar os botões com base na posição da imagem atual
    prevButton.style.display = currentImageIndex3 === 0 ? 'none' : 'block';
    nextButton.style.display = currentImageIndex3 === 5 ? 'none' : 'block';
}

function updateModalImage3() {
    const modalImage3 = document.getElementById('modalImage3');
    modalImage3.src = document.querySelector('.carousel3 img:nth-child(' + (currentIndex3 + 1) + ')').src;
}

// Automação: Mudar automaticamente os slides a cada 2.5 segundos (2500 milissegundos)
setInterval(nextSlide3, 2500);

const carousel4 = document.querySelector('.carousel4');
const prevButton4 = document.querySelector('.prev4');
const nextButton4 = document.querySelector('.next4');

let currentIndex4 = 0;
const totalSlides4 = 6;
let currentImageIndex4 = 0;
let modalImages4 = [];

function updateCarousel4() {
    const translateValue4 = -currentIndex4 * (100 / totalSlides4);
    carousel4.style.transform = `translateX(${translateValue4}%)`;
}

function nextSlide4() {
    currentIndex4 = (currentIndex4 + 1) % totalSlides4;
    updateCarousel4();
}

function prevSlide4() {
    currentIndex4 = (currentIndex4 - 1 + totalSlides4) % totalSlides4;
    updateCarousel4();
}

function openModal4(event) {
    const clickedImage = event.target;
    const modal = document.getElementById('modal4');
    const modalImage = document.getElementById('modalImage4');

    modal.style.display = 'block';
    modalImage.src = clickedImage.src;
    currentImageIndex4 = Array.from(clickedImage.parentNode.children).indexOf(clickedImage);
    modalImages4 = Array.from(document.querySelector('.carousel4').children);
    updateModalButtonsVisibility4();
}

function closeModal4() {
    document.getElementById('modal4').style.display = 'none';
}

function prevImage4() {
    currentIndex4 = (currentIndex4 - 1 + totalSlides4) % totalSlides4;
    updateModalImage4();
    const modalImage = document.getElementById('modalImage4');
    currentImageIndex4 = (currentImageIndex4 - 1 + 6) % 6;
    modalImage.src = modalImages4[currentImageIndex4].src;
    updateModalButtonsVisibility4();
}

function nextImage4() {
    currentIndex4 = (currentIndex4 + 1) % totalSlides4;
    updateModalImage4();
    const modalImage = document.getElementById('modalImage4');
    currentImageIndex4 = (currentImageIndex4 + 1) % 6;
    modalImage.src = modalImages4[currentImageIndex4].src;
    updateModalButtonsVisibility4();
}

function updateModalButtonsVisibility4() {
    const prevButton = document.querySelector('.prev4');
    const nextButton = document.querySelector('.next4');

    // Mostrar ou ocultar os botões com base na posição da imagem atual
    prevButton.style.display = currentImageIndex4 === 0 ? 'none' : 'block';
    nextButton.style.display = currentImageIndex4 === 5 ? 'none' : 'block';
}

function updateModalImage4() {
    const modalImage4 = document.getElementById('modalImage4');
    modalImage4.src = document.querySelector('.carousel4 img:nth-child(' + (currentIndex4 + 1) + ')').src;
}

// Automação: Mudar automaticamente os slides a cada 2.5 segundos (2500 milissegundos)
setInterval(nextSlide4, 2500);



function enviarWhatsapp() {
    // Obtenha os dados do formulário
    var nome = document.getElementById("nome").value;
    var curso = document.getElementById("curso").value;
    var cidade = document.getElementById("cidade").value;


     var mensagemWhatsappDescalvado = encodeURIComponent("Olá me chamo " + nome + ". Vim pelo site e gostaria de agendar uma aula experimental para o curso de " + curso + " em Descalvado!");
     var mensagemWhatsappIbate = encodeURIComponent("Olá me chamo " + nome + ". Vim pelo site e gostaria de agendar uma aula experimental para o curso de " + curso + " em Ibaté!");
     var mensagemWhatsappRibeirao = encodeURIComponent("Olá me chamo " + nome + ". Vim pelo site e gostaria de agendar uma aula experimental para o curso de " + curso + " em Ribeirão Bonito!");


    // Crie o link para o WhatsApp
    var linkWhatsappDescalvado = "https://wa.me/19992671617/?text=" + mensagemWhatsappDescalvado;
    var linkWhatsappIbate = "https://wa.me/16996294928/?text=" + mensagemWhatsappIbate;
    var linkWhatsappRibeirao = "https://wa.me/16999940880/?text=" + mensagemWhatsappRibeirao;

    if(cidade == "descalvado"){
        linkWhatsapp = linkWhatsappDescalvado
    }else if(cidade == "ibate"){
        linkWhatsapp = linkWhatsappIbate
    }else if(cidade == "ribeirao_bonito"){
        linkWhatsapp = linkWhatsappRibeirao
    }

    // Abra o link no WhatsApp
    window.location.href = linkWhatsapp;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var scrollRevealElements = document.querySelectorAll(".scroll-reveal");
  
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var item = entry.target;
          item.style.opacity = 1;
          item.style.transform = "translateY(0)";
          observer.unobserve(item);
        }
      });
    }, options);
  
    scrollRevealElements.forEach(function(item) {
      observer.observe(item);
    });
  });


  