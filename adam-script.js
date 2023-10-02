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
      currentSlide.classList.add("fade-transition");
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
  
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= imagesArray.length) {
        currentSlideIndex = 0;
      }
      loadCurrentSlide();
      imageDescription.textContent = "";
    }
  
    function prevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = imagesArray.length - 1;
      }
      loadCurrentSlide();
      imageDescription.textContent = "";
    }
  
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    loadCurrentSlide();
  
    // setInterval(nextSlide, 4000);
    // _____________________________
    const imageDescription = document.getElementById("imageDescription");
  
    slidesContainer.addEventListener("click", function () {
      imageDescription.textContent = descriptions[currentSlideIndex];
    });
    // _______________________________
    let touchStartX = null;
    let touchEndX = null;
    
    slidesContainer.addEventListener('touchstart', function(event) {
      touchStartX = event.touches[0].clientX;
    });
    
    slidesContainer.addEventListener('touchmove', function(event) {
      touchEndX = event.touches[0].clientX;
    });
    
    slidesContainer.addEventListener('touchend', function() {
      if (touchStartX !== null && touchEndX !== null) {
        const deltaX = touchEndX - touchStartX;
        if (deltaX > 0) {
          prevSlide();
        } else if (deltaX < 0) {
          nextSlide();
        }
      }
    
      touchStartX = null;
      touchEndX = null;
    });
  });
  


// ________________________//     // ________________________________________________
// // ____________________

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

// function updatePagination() {
//     pagination.innerHTML = '';

//     slides.forEach((slide, i) => {
//         const dot = document.createElement('div');
//         dot.classList.add('carousel-dot');

//         if (i === currentIndex) {
//             dot.classList.add('active');
//         }

//         dot.addEventListener('click', () => {
//             goToSlide(i);
//         });

//         pagination.appendChild(dot);
//     });
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


