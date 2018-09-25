var owl = $('#owl-carousel');

owl.owlCarousel({
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            center: true,
        },
        768: {
            items: 2,
        },
        1220: {
            items: 3,
        }
    }
});

document.getElementById('prev').addEventListener("click", function (ev) {
    owl.trigger('prev.owl.carousel');
});

document.getElementById('next').addEventListener("click", function (ev) {
    owl.trigger('next.owl.carousel');
});