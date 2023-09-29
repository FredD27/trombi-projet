document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector(".carousel");
    const nextButton = document.querySelector(".arrow_button_next");
    const prevButton = document.querySelector(".arrow_button_prev");
    let currentSlideIndex = 0;
  
    const imagesArray = [
      "./Photos/Les-4-Fantastiques/IMG_0037.jpg",
      "./Photos/Les-4-Fantastiques/IMG_0038.jpg",
      "./Photos/Les-4-Fantastiques/IMG_0039.jpg",
      "./Photos/Les-4-Fantastiques/IMG_0040.jpg",
    ];
  
    const descriptions = [
      "Description de l'image 1",
      "Description de l'image 2",
      "Description de l'image 3",
      "Description de l'image 4",
    ];
  
    function loadCurrentSlide() {
      slidesContainer.innerHTML = "";
  
      const currentSlide = document.createElement("div");
      currentSlide.classList.add("carousel-slide");
      const img = document.createElement("img");
      img.src = imagesArray[currentSlideIndex];
      currentSlide.appendChild(img);
      slidesContainer.appendChild(currentSlide);
    }
  
    imagesArray.forEach((imagePath) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide");
      const img = document.createElement("img");
      img.src = imagePath;
      slide.appendChild(img);
      slidesContainer.appendChild(slide);
    });
  
    // function updateCarousel() {
    //   loadCurrentSlide();
    // }
  
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= imagesArray.length) {
        currentSlideIndex = 0;
      }
      loadCurrentSlide();
    }
  
    function prevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = imagesArray.length - 1;
      }
      loadCurrentSlide();
    }
  
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    loadCurrentSlide();
  
    setInterval(nextSlide, 4000);
    const imageDescription = document.getElementById("imageDescription");
  
    slidesContainer.addEventListener("click", function () {
      imageDescription.textContent = descriptions[currentSlideIndex];
    });
  });
  


// _________________________
// const carouselContainer = document.querySelector('.carousel');
// const slides = document.querySelectorAll('.carousel-slide');
// const nextButton = document.querySelector('.arrow_button_next');
// const prevButton = document.querySelector('.arrow_button_prev');

// let currentSlideIndex = 0;

// document.addEventListener('DOMContentLoaded', function() {
//     const imagesArray = [
//         "./Photos/Les-4-Fantastiques/IMG_0037.jpg",
//         "./Photos/Les-4-Fantastiques/IMG_0038.jpg",
//         "./Photos/Les-4-Fantastiques/IMG_0039.jpg",
//         "./Photos/Les-4-Fantastiques/IMG_0040.jpg"
//     ];

//     slides.forEach((slide, index) => {
//         const imgElement = document.createElement('img');
//         imgElement.src = imagesArray[index];
//         imgElement.classList.add('carousel-slide');
//         slide.appendChild(imgElement);
//     });
//     // ... Le reste de votre code
//     // imagesArray.forEach(imagePath => {
//     //     const imgElement = document.createElement('img');

//     //     imgElement.src = imagePath;

//     //     imgElement.classList.add('carousel-slide');

//     //     console.log('Image ajoutée :', imagePath);
//     //     for (let i = 0; i < slides.length; i++) {
//     //         slides[i].appendChild(imgElement);
//     //     }
//     // });

//     nextButton.addEventListener('click', function() {
//         currentSlideIndex++;
//         if (currentSlideIndex >= slides.length) {
//             currentSlideIndex = 0;
//         }

//         updateCarousel();
//     });

//     prevButton.addEventListener('click', function() {

//         currentSlideIndex--;
//         if (currentSlideIndex < 0) {
//             currentSlideIndex = slides.length - 1;
//         }

//         updateCarousel();
//     });

//     // function updateCarousel() {
//     //     for (let i = 0; i < slides.length; i++) {
//     //         slides[i].classList.remove('active');
//     //     }
//     //     slides[currentSlideIndex].classList.add('active');

//     //     console.log('Slide active :', currentSlideIndex);
//     // }

//     // ________________________________________________

// // ____________________

// // let touchStartX = null;
// // let touchEndX = null;

// // carouselContainer.addEventListener('touchstart', function(event) {
// //   touchStartX = event.touches[0].clientX;
// // });

// // carouselContainer.addEventListener('touchmove', function(event) {
// //   touchEndX = event.touches[0].clientX;
// // });

// // carouselContainer.addEventListener('touchend', function() {
// //   if (touchStartX !== null && touchEndX !== null) {
// //     const deltaX = touchEndX - touchStartX;
// //     if (deltaX > 0) {
// //       prevSlide();
// //     } else if (deltaX < 0) {
// //       nextSlide();
// //     }
// //   }

// //   touchStartX = null;
// //   touchEndX = null;
// // });
// // ___________________________

// // function previous() {
// //     const widhtCarousel = document.querySelector('.carousel').offsetWidth;
// document.querySelector('.carousel').scrollLeft -= widhtCarousel;

// // function next() {
// //     const widhtCarousel = document.querySelector('.carousel').offsetWidth;
// //     document.querySelector('.carousel').scrollLeft += widhtCarousel;

// // // function resetCarousel() {
// // //     const widthCarousel = document.querySelector('.carousel').offsetWidth;
// // //     document.querySelector('.carousel').scrollLeft = 0;
// // //     currentIndex = 0;
// // // }

// // document.querySelector('.arrow_button_prev').addEventListener('click', previous);
// // document.querySelector('.arrow_button_next').addEventListener('click', next);

// // ________________________
// // let currentIndex = 0;

// // // Fonction pour mettre à jour la pagination
// // function updatePagination() {
// //     pagination.innerHTML = ''; // Efface le contenu précédent

// //     // Parcourez les diapositives et créez des points de pagination
// //     slides.forEach((slide, i) => {
// //         const dot = document.createElement('div');
// //         dot.classList.add('carousel-dot');

// //         // Ajoutez une classe "active" au point actuel
// //         if (i === currentIndex) {
// //             dot.classList.add('active');
// //         }

// //         // Ajoutez un gestionnaire d'événement pour chaque point de pagination
// //         dot.addEventListener('click', () => {
// //             goToSlide(i);
// //         });

// //         // Ajoutez le point à la pagination
// //         pagination.appendChild(dot);
// //     });
// // }
// // ________________________
// // function loadImages() {
// //     let imagesLoaded = 0;
// //     console.log(slides)

// //     slides.forEach((img, i) => {
// //         img.onload = () => {
// //             imagesLoaded++;
// //             if (imagesLoaded === slides.length) {
// //                 updatePagination();
// //             }
// //         };
// //     });
// // }

// // __________________________
// // // Fonction pour déplacer le carrousel vers une diapositive spécifique
// // function goToSlide(index) {
// //     console.log(slides);
// //     currentIndex = index;
// //     const translateX = -currentIndex * 100 + '%'; // Déplace le carrousel en pourcentage
// //     carousel.style.transform = `translateX(${translateX})`;
// //     updatePagination();
// // }

// // // prevButton.addEventListener('click', prevSlide);
// // // nextButton.addEventListener('click', nextSlide);
