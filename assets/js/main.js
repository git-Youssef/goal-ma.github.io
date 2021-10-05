$(document).ready(function () {

    $('.slider_wrapper').slick({
    dots : true,
    prevArrow: '<button class="prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="fas fa-chevron-right"></i></button>'
    });

})

let navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
    this.classList.toggle("opened");
})