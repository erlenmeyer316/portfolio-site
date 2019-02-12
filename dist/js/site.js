document.addEventListener("DOMContentLoaded", function() {
    window.sr = ScrollReveal({
        reset: false,
        duration: 600,
        easing: 'cubic-bezier(.694,0,.335,1)',
        scale: 1,
        viewFactor: 0.3
    });

    sr.reveal('.background');
    sr.reveal('.skills');
    sr.reveal('.technical-summary');
    sr.reveal('.experience');
    sr.reveal('.featured-projects');
    sr.reveal('.other-projects');

});