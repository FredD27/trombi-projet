document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const pagination = document.querySelector('.carousel-pagination');

    let currentIndex = 0;
    let slideWidth = slides[0].clientWidth;

    // Fonction pour mettre à jour la pagination
    function updatePagination() {
        pagination.innerHTML = '';
        slides.forEach((slide, i) => {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            pagination.appendChild(dot);
        });
        // Mettre en surbrillance le point actif
        const dots = pagination.querySelectorAll('.carousel-dot');
        dots[currentIndex].classList.add('active');
    }

    // Fonction pour aller à une diapositive spécifique
    function goToSlide(index) {
        currentIndex = index;
        const translateX = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${translateX}px)`;

        // Réinitialiser la classe active de tous les points
        const dots = pagination.querySelectorAll('.carousel-dot');
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });

        // Mettre en surbrillance le point actif
        dots[currentIndex].classList.add('active');
    }

    // Redimensionner le carrousel lorsque la fenêtre est redimensionnée
    window.addEventListener('resize', () => {
        slideWidth = slides[0].clientWidth;
        const translateX = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${translateX}px)`;
    });

    // Initialiser la pagination
    updatePagination();
});
