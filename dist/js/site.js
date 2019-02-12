document.addEventListener("DOMContentLoaded", function() {
    window.sr = ScrollReveal({
        reset: false,
        duration: 400,
        easing: 'cubic-bezier(.694,0,.335,1)',
        scale: 1,
        viewFactor: 0.1
    });

    sr.reveal('.background');
    sr.reveal('.skills');
    sr.reveal('.technical-summary');
    sr.reveal('.featured-projects');
    sr.reveal('.experience');


});