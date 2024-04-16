
// Gestion de la couleur de l'arriére plant de la nav bar 
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            nav.classList.add('nav__black');
        } else {
            nav.classList.remove('nav__black');
        }
    });
});

// Redirection apres le click sur les image qui on la classe imageAvecRedirection
document.querySelectorAll(".imageAvecRedirection").forEach(function(image) {
    image.addEventListener("click", function() {
        window.location.href = "video";
    });
});

