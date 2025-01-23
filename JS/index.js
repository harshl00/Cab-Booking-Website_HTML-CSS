//Carousels
$(document).ready(function() {
    $("#Sightseeing-slider").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 30
            },

            480: {
                items: 2
            },

            768: {
                items: 3
            },

            1240: {
                items: 4
            }
        }
    })

    $("#location-slider").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 30
            },

            480: {
                items: 2
            },

            768: {
                items: 3
            }
        }
    })

    $(".modal-slider").owlCarousel({
        loop: true,
        margin: 200,
        center: true,
        dots: true,
        nav: true,
        navText: ["<i class='fa-solid fa-circle-chevron-left'></i>", "<i class='fa-solid fa-circle-chevron-right'></i>"],
        items: 1
    })
});