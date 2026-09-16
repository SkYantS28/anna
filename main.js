var modal = document.getElementById("myModal");

var imgs = document.querySelectorAll(".myImg");

var modalImg = document.getElementById("img01");

var span = document.getElementsByClassName("close")[0];

var prev = document.getElementsByClassName("prev")[0];

var next = document.getElementsByClassName("next")[0];

var imagemAtual = 0;


imgs.forEach(function(img, index) {

    img.onclick = function() {

        imagemAtual = index;

        modal.style.display = "flex";

        modalImg.src = imgs[imagemAtual].src;

    };

});


span.onclick = function() {

    modal.style.display = "none";

};


next.onclick = function(event) {

    event.stopPropagation();

    imagemAtual++;

    if (imagemAtual >= imgs.length) {

        imagemAtual = 0;

    }

    modalImg.src = imgs[imagemAtual].src;

};


prev.onclick = function(event) {

    event.stopPropagation();

    imagemAtual--;

    if (imagemAtual < 0) {

        imagemAtual = imgs.length - 1;

    }

    modalImg.src = imgs[imagemAtual].src;

};


modal.onclick = function(event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


document.addEventListener("keydown", function(event) {

    if (modal.style.display === "flex") {

        if (event.key === "ArrowRight") {

            next.click();

        }

        if (event.key === "ArrowLeft") {

            prev.click();

        }

        if (event.key === "Escape") {

            modal.style.display = "none";

        }

    }

});