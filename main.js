var typed = new Typed('.typing-text span', {
    strings: ["Web Developer", "Software Developer", "Sleeper", "Cutie", "Asap rocky"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Show one item at a time
        loop: true, // Infinite loop
        margin: 10, // Space between items
        nav: true, // Show next/prev arrows
        dots: true, // Show pagination dots
        autoplay: true, // Auto-scroll
        autoplayTimeout: 5000, // 5 seconds delay
        autoplayHoverPause: true, // Pause on hover
        responsive: {
            0: {
                items: 1 // 1 item on small screens
            },
            600: {
                items: 2 // 2 items on medium screens
            },
            1000: {
                items: 3 // 3 items on larger screens
            }
        }
    });
});
