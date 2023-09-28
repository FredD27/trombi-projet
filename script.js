const tablo = [
    "Photos/TheOG/IMG_9996.jpg",
    "Photos/TheOG/IMG_9997.jpg",
    "Photos/TheOG/IMG_9998.jpg",
    "Photos/TheOG/IMG_9999.jpg",
];

const carouselGrid1 = document.querySelector("#carouselGrid1");
console.log(carouselGrid1);

for (const pic of tablo) {
    // creation de la div qui va contenir l'image
    const div = document.createElement("div");
    div.classList.add("profilePic");

    // cree l'image
    const profilePic = document.createElement("img");
    profilePic.classList.add("profilePic");
    profilePic.src = pic;

    // injecter l'img dans la div
    div.appendChild(profilePic);

    //injecter a div dans carousel
    carouselGrid1.appendChild(div);
}
