
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

// Automação: Mudar automaticamente os slides a cada 2.5 segundos (2500 milissegundos)
setInterval(nextSlide2, 2500);


const carousel3 = document.querySelector('.carousel3');
const prevButton3 = document.querySelector('.prev3');
const nextButton3 = document.querySelector('.next3');

let currentIndex3 = 0;
const totalSlides3 = 6;

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

// Automação: Mudar automaticamente os slides a cada 2.5 segundos (2500 milissegundos)
setInterval(nextSlide3, 2500);


const carousel4 = document.querySelector('.carousel4');
const prevButton4 = document.querySelector('.prev4');
const nextButton4 = document.querySelector('.next4');

let currentIndex4 = 0;
const totalSlides4 = 6;

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
  