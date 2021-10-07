$(document).ready(function () {

    $('.slider_wrapper').slick({
        dots: true,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-chevron-right"></i></button>'
    });

})



// icon toggler 

let btn_toggler = document.querySelector(".btn_toggler");

btn_toggler.addEventListener("click", function () {
    this.classList.toggle("opened");
    document.querySelector(".navigation").classList.toggle("translate");
})


// on scroll add fixed-top class to header 
window.addEventListener('scroll', function (e) {

    if (this.scrollY > 100) {
        document.querySelector("header").classList.add("fixed-top");
    } else {
        document.querySelector("header").classList.remove("fixed-top");
    }

})