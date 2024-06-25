$('.carousel').carousel({
    interval: 2700
})

var thumbnails1 = document.getElementsByClassName("thumbnail1");
var mainImage1 = document.getElementById("mainImage1");
mainImage1.src = thumbnails1[0].src;

function changeImage1(image1) {
    mainImage1.src = image1.src;
}

var thumbnails2 = document.getElementsByClassName("thumbnail2");
var mainImage2 = document.getElementById("mainImage2");
mainImage2.src = thumbnails2[0].src;

function changeImage2(image2) {
    mainImage2.src = image2.src;
}

var thumbnails3 = document.getElementsByClassName("thumbnail3");
var mainImage3 = document.getElementById("mainImage3");
mainImage3.src = thumbnails3[0].src;

function changeImage3(image3) {
    mainImage3.src = image3.src;
}

var thumbnails4 = document.getElementsByClassName("thumbnail4");
var mainImage4 = document.getElementById("mainImage4");
mainImage4.src = thumbnails4[0].src;

function changeImage4(image4) {
    mainImage4.src = image4.src;
}



