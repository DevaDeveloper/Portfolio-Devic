window.addEventListener("scroll", function() {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

$('.js--section-features').waypoint(function(direction){
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
        offset: '60px;'
    });