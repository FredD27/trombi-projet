
// NAVBAR
const links = document.querySelectorAll("nav li");

iconsBurger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  var topBtn = document.querySelector(".top_btn");
  if (scrollPosition > 200) {
      topBtn.classList.add("show");
  } else {
      topBtn.classList.remove("show");
  }
 });

// CAROUSEL
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
  // _____________________________
  const imageDescription = document.getElementById("imageDescription");
  imageDescription.classList.add("img-desc");
  

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

//CONTENU BODY DESKTOP

//Tableau des personnes, eux même encapsulé dans des tableaux (1 tableau par groupe)
const personnes = [
  [
    {
      nom: "CHAUVEAU",
      prenom: "Mathieu",
      age: 33,
      image: "./Photos/Rasta-Rockets/IMG_0014.jpg",
      description: "<strong>Talent:</strong> Imitations multiples",
      objectif:
        "<strong>Objectif professionnel:</strong> Vendre des applications qui changeront le monde",
      bref: "<strong>En bref:</strong> Bon client de la connerie universelle",
      linkedin: "https://www.linkedin.com/in/mathieu-chauveau-a21393291/",
      gitHub: "https://github.com/MatCabdel"
    },

    {
      nom: "BARD",
      prenom: "Raphaël",
      age: 25,
      image: "./Photos/Rasta-Rockets/IMG_0017.jpg",
      description: "<strong>Talent:</strong> Ne sait pas roter",
      objectif: "<strong>Objectif pro:</strong> Nomade Digital",
      bref: "<strong>En bref:</strong> La vie est un jeu",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "DUPONT",
      prenom: "Cédric",
      age: 26,
      image: "./Photos/Rasta-Rockets/IMG_0019.jpg",
      description: "<strong>Talent:</strong> Très très bon vendeur",
      objectif: "<strong>Objectif professionnel:</strong> Nomade Digital",
      bref: "<strong>En bref:</strong> On apprend pas à nager hors de l'eau",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "MCHEIK",
      prenom: "Mahdi",
      age: "« 20 + 17 »",
      image: "./Photos/Rasta-Rockets/IMG_0020.jpg",
      description: "<strong>Talent:</strong> « Je dessine gavé bien »",
      objectif: "<strong>Objectif professionnel:</strong> Développeur d'applications",
      bref: "<strong>En bref:</strong> « Parfois, il ne faut pas seulement tourner la page, il faut changer de livre »",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "DELAIRE",
      prenom: "Marie",
      age: 29,
      image: "./Photos/Rasta-Rockets/IMG_0022.jpg",
      description: "<strong>Talent:</strong> Incarne le talent lui-même",
      objectif:
        "<strong>Objectif professionnel:</strong> Gérer sa propre entreprise avec ses propres valeurs : on bosse, mais pas trop",
      bref: "<strong>En bref:</strong> « Est-ce que c’est bon pour vous ? » -Octogone : Dimitri VS Squeezy",
      linkedin: "https://www.linkedin.com/in/marie-delaire-dev/",
      gitHub: "https://github.com/Hepsox"
    },
  ],
  [
    {
      nom: "BONNAURE",
      prenom: "Sylvain",
      age: "« Pas assez vieux pour connaître woodstuck »",
      image: "./Photos/Les-4-Fantastiques/IMG_0037.jpg",
      description:
        "<strong>Talent:</strong> Créateur du cocktail officiel du festival burlesque de Montréal",
      objectif:
        "<strong>Objectif professionnel:</strong> Vivre sa meilleure vie (près de l'océan)",
      bref: "<strong>En bref:</strong> Qui ne tente rien n'a rien",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "DURANTY",
      prenom: "David",
      age: 48,
      image: "./Photos/Les-4-Fantastiques/IMG_0038.jpg",
      description: "<strong>Talent:</strong> Triche avec son vélo électrique",
      objectif:
        "<strong>Objectif professionnel:</strong> Devenir meilleur que Dimitri (a.k.a: Dieu)",
      bref: "<strong>En bref:</strong> « T'inquiètes, je gère »",
      linkedin: "https://www.linkedin.com/in/david-duranty-166998251/",
      gitHub: "https://github.com/davidduranty"
    },

    {
      nom: "CAIREY",
      prenom: "Antoine",
      age: 27,
      image: "./Photos/Les-4-Fantastiques/IMG_0039.jpg",
      description: "<strong>Talent:</strong> Champion de géoguessr",
      objectif: "<strong>Objectif professionnel:</strong> Devenir Elon Musk en mieux",
      bref: "<strong>En bref:</strong> « Chauve qui peut ! »",
      linkedin: "https://www.linkedin.com/in/antoine-cairey/",
      gitHub: "https://github.com/AntoineCairey"
    },

    {
      nom: "GUYOMARD",
      prenom: "Victor",
      age: 24,
      image: "./Photos/Les-4-Fantastiques/IMG_0040.jpg",
      description: "<strong>Talent:</strong> Décapsule une bière, avec une autre bière",
      objectif: "<strong>Objectif professionnel:</strong> Devenir Président",
      bref: "<strong>En bref:</strong> Les plus belles années d’une vie sont celles que l’ont a pas encore vécues",
      linkedin: "https://www.linkedin.com/in/victor-guyomard-b8b432158/",
      gitHub: "https://github.com/bfsylvain"
    },
  ],
  [
    {
      nom: "HARMACH",
      prenom: "Nassime",
      age: 21,
      image: "./Photos/Tango-Charlie/IMG_0005.jpg",
      description: "<strong>Talent: </strong>Gps intégré dans son cerveau",
      objectif: "<strong>Objectif professionnel: </strong>Programmeur logiciel",
      bref: "<strong>En bref:</strong> La fin justifie les moyens",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "LAURIE",
      prenom: "Cassiopée",
      age: 23,
      image: "./Photos/Tango-Charlie/IMG_0008.jpg",
      description: "<strong>Talent:</strong> Voltige, avec des chevaux",
      objectif: "<strong>Objectif professionnel:</strong> Hackeuse professionnelle",
      bref: "<strong>En bref:</strong> Hakuna matata",
      linkedin: "#",
      gitHub: "https://github.com/cassiopeelaurie"
    },

    {
      nom: "CAUVIN",
      prenom: "Annaëlle",
      age: 22,
      image: "./Photos/Tango-Charlie/IMG_0009.jpg",
      description: "<strong>Talent:</strong> N'arrive pas à être en retard",
      objectif: "<strong>Objectif professionnel:</strong> Nomade Digital",
      bref: "<strong>En bref:</strong> « Je ne suis pas optimiste, je suis déterminée »",
      linkedin: "https://www.linkedin.com/in/anaelle-cauvin-4310a6201/",
      gitHub: "https://github.com/Ellana33"
    },

    {
      nom: "VALLEIX",
      prenom: "Aurore",
      age: 41,
      image: "./Photos/Tango-Charlie/IMG_0011.jpg",
      description: "<strong>Talent:</strong> Touche son nez avec sa langue",
      objectif:
        "Objectif professionnel:</strong> Développer au quatres coins du monde",
      bref: "<strong>En bref:</strong> « Je vais bien, tout vas bien »",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "HAYET",
      prenom: "Benoit",
      age: 33,
      image: "./Photos/Tango-Charlie/IMG_0012.jpg",
      description: "<strong>Talent:</strong> Réalise des peintures abstraites",
      objectif: "<strong>Objectif professionnel:</strong> Devenir Freelance",
      bref: "<strong>En bref:</strong> « Il n’y a rien de noble à être supérieur à vos semblables. La vraie noblesse est d’être supérieur à celui que vous avez été auparavant »",
      linkedin: "#",
      gitHub: "https://github.com/Benoit-Hayet"
    },
  ],
  [
    {
      nom: "BRUN",
      prenom: "Florian",
      age: 33,
      image: "./Photos/The-OG/IMG_9996.jpg",
      description: "<strong>Talent: </strong>Roi du cookéo",
      objectif:
        "<strong>Objectif professionnel: </strong>Devenir le maître de Javascript",
      bref: "<strong>En bref:</strong> Fidèle comme son ombre",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "GARCIA",
      prenom: "Victor",
      age: 28,
      image: "./Photos/The-OG/IMG_9997.jpg",
      description:
        "<strong>Talent:</strong> Peux manger un bucket pour deux + les deux frites au KFC, et un burger en plus",
      objectif: "<strong>Objectif pro: </strong>Joueur e-sport",
      bref: "<strong>En bref:</strong> « Ca geek ce soir ? »",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "HEMAMOU",
      prenom: "Adam",
      age: 26,
      image: "./Photos/The-OG/IMG_9998.jpg",
      description: "<strong>Talent:</strong> Chaud sur overwatch",
      objectif: "<strong>Objectif professionnel:</strong> Devenir contorsionniste",
      bref: "<strong>En bref:</strong> « Rentrer dans un micro-onde »",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "DRUET",
      prenom: "Frédérique",
      age: "« Pas très vieille »",
      image: "./Photos/The-OG/IMG_9999.jpg",
      description: "<strong>Talent: </strong>Bouge ses oreilles sans les toucher",
      objectif: "<strong>Objectif professionnel:</strong> Comédie-dev à plein temps",
      bref: "<strong>En bref: </strong>« Ne fais pas aux autres ce que tu n'aimerais pas qu'on te fasse »",
      linkedin: "https://www.linkedin.com/in/fred-druet-855b58293/",
      gitHub: "https://github.com/FredD27"
    },
  ],
  [
    {
      nom: "ABAJOLI",
      prenom: "Leslie",
      age: 34,
      image: "./Photos/Totally-Spies/IMG_0026.jpg",
      description: "<strong>Talent:</strong> Danse très bien sur de l'afro rythm",
      objectif:
        "<strong>Objectif professionnel: </strong>Développeuse web riche et célèbre",
      bref: "<strong>En bref:</strong> « Tout ce qui est petit est mignon »",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "BORDES",
      prenom: "Lucas",
      age: 48,
      image: "./Photos/Totally-Spies/IMG_0028.jpg",
      description: "<strong>Talent: </strong>Décapsuler des bières avec les pieds",
      objectif:
        "<strong>Objectif professionnel:</strong> Survivre à une autre journée à la Wild",
      bref: "<strong>En bref:</strong> « Ce n’est pas l’émotion qui définie l’expression mais l’expression qui définie l’émotion »",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "VANNIER",
      prenom: "Claire",
      age: "« Pas assez grande pour atteindre la dernière étagère »",
      image: "./Photos/Totally-Spies/IMG_0032.jpg",
      description: "<strong>Talent:</strong> Chanter sous la douche",
      objectif:
        "<strong>Objectif professionnel:</strong> Apporter aux autres ce qu'on lui a apporté",
      bref: "<strong>En bref:</strong> Réussir c'est prendre le risque d'échouer",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },

    {
      nom: "COUTAIS",
      prenom: "Nélia",
      age: "« Pas assez grande pour maîtriser le code »",
      image: "./Photos/Totally-Spies/IMG_0034.jpg",
      description: "<strong>Talent:</strong> Trop bien caché",
      objectif:
        "<strong>Objectif professionnel:</strong> Alternance et vivre de son travail",
      bref: "<strong>En bref:</strong> « Some people live more in 20 years than others do in 80, it’s not the time that matters, it’s the person »",
      linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain"
    },
  ],
];

//Crée la variable div-groupes pour stocker l'élément html #div-groupes
const divGroupes = document.querySelector(".div-groupes");
//Pour chaque (personne) dans le tableau personne[0], créer une card,
//qui est égale ) à la fonction createPersonneCard(personne).

personnes[0].forEach((personne) => {
  const card = createPersonneCard(personne);
  divGroupes.appendChild(card);
});

const divGroupes2 = document.querySelector(".div-groupes2");

personnes[1].forEach((personne) => {
  const card = createPersonneCard(personne);
  divGroupes2.appendChild(card);
});

const divGroupes3 = document.querySelector(".div-groupes3");

personnes[2].forEach((personne) => {
  const card = createPersonneCard(personne);
  divGroupes3.appendChild(card);
});

const divGroupes4 = document.querySelector(".div-groupes4");
let cardCounter = 0;

personnes[3].forEach((personne) => {
  const card = createPersonneCard(personne);
  divGroupes4.appendChild(card);
  // Si le reste de la division de cardCounter par 2 est égal à 1,
  //alors ajoute la classe 'reversed' à l'élément HTML représenté par la variable card.
  if (cardCounter % 2 === 1) {
    card.classList.add("reversed");
  }

  cardCounter++;
});

const divGroupes5 = document.querySelector(".div-groupes5");
let cardCount = 0;

personnes[4].forEach((personne) => {
  const card = createPersonneCard(personne);
  divGroupes5.appendChild(card);
  if (cardCount % 2 === 1) {
    card.classList.add("reversed");
  }

  cardCount++;
});

//^ Ici, VSCode comprends personnes[0].forEach = l'objet à l'index 0
//du tableau personnes. Le paramètre de forEach est (personne), qui
//devient le modèle de l'objet à l'index 0 du tableau personnes.

function createPersonneCard(personne) {
  const card = document.createElement("div");
  card.classList.add("personne-card");
  const cardList = document.querySelectorAll(".personne-card");

  // for (let i = 1; i < cardList.length; i += 2) {
  //   cardList[i].classList.add("reversed");
  // }

  card.innerHTML = `
        <div class="personnel"><img class="img-perso" src="${personne.image}" alt="${personne.nom}">
        <h3>${personne.prenom} ${personne.nom} ${personne.age}</h3>
        <p class="card-txt"> ${personne.description} </br>${personne.objectif} </br>${personne.bref} </br>
  
        </p><div class="double-logo"><a href="${personne.linkedin}" target="_blank"><img id="logoLinkedin" src="./images/LinkedIn.png"></img></a> 
        <a href="${personne.gitHub}" target="_blank"><img id="logoGitHub" src="./images/logoGitHub.png"></img></a></div>
    `;
  return card;
}

// ^ Création de la fonction createCardPersonne(personne), qui sera appelée grâce
// à (personne) et qui permettra de créer une div, lui donner la class personne-card
// et écrire dans le HTML les valeurs contenues dans l'objet personne.

const groupDescriptions = [
  {
    titre: "Les Rasta Rockets",
    logo: "./images/rastaRockett.jpg",
    description:
     "Chacun d'entre nous apporte ses compétences uniques, que ce soit en design web, en collecte de données, en développement ou en photographie pour créer une ressource complète et attractive. Nous croyons fermement que les bars locaux sont des joyaux de la vie nocturne, et nous voulons les mettre en lumière.",
  },
  {
    titre: "Les Quatres Fantastiques",
    logo: "images/les4Fantastiques.jpeg",
    description:
      "Les 4 Fantastiques : Quatre cerveaux brillants, un seul objectif - dominer le monde du développement ! Avec Antoine, David, Sylvain et Victor, la technologie n'a qu'à bien se tenir. Préparez-vous à des lignes de code incroyables et à des solutions informatiques qui vous laisseront sans voix.",
  },
  {
    titre: "Tango Charlie",
    logo: "images/alphaTangoCharlie.jpg",
    description:
      "Les Rasta Rockets, contre toute attente, ne sont pas des Rastas. Ce groupe de 5 développeurs web en puissance est sympathique et doué en code, surtout si vous cherchez les meilleurs bars du coin.",
  },
  {
    titre: "Les OGs",
    logo: "images/theOg.png",
    description:
      "Les Rasta Rockets, contre toute attente, ne sont pas des Rastas. Ce groupe de 5 développeurs web en puissance est sympathique et doué en code, surtout si vous cherchez les meilleurs bars du coin.",
  },
  {
    titre: "Les Totally Spies",
    logo: "images/tottallySpies.jpg",
    description:
      "Trois jeunes filles, Nelia, Claire et Leslie, mènent une double vie en tant qu'espionnes pour l'organisation secrète ZenList, dirigée par Jerry, tout en jonglant avec les défis de la vie quotidienne d'étudiants à la wild code School!",
  },
];

// ^ Tableau des descriptions des groupes; comprend titre, logo, description
const groupDescription1 = document.querySelector(".groupDescription1");
const firstGroup = groupDescriptions[0];
const newGroup = createGroup(firstGroup);
//variable groupDescription1 = la div qui va contenir la description du groupe
//firstGroup va contenir l'objet du tableau groupDescriptions à l'index 0
//newGroup est la variable qui appelle la fonction createGroup et l'argument
//permet de l'insérer dans firstGroup

groupDescription1.appendChild(newGroup);
//on fini sur un appendChild pour pousser notre nouvelle description dans la div
//présente sur le HTML

const groupDescription2 = document.querySelector(".groupDescription2");
const secondGroup = groupDescriptions[1];
const newGroup2 = createGroup(secondGroup);

groupDescription2.appendChild(newGroup2);

const groupDescription3 = document.querySelector(".groupDescription3");
const thirdGroup = groupDescriptions[2];
const newGroup3 = createGroup(thirdGroup);

groupDescription3.appendChild(newGroup3);

const groupDescription4 = document.querySelector(".groupDescription4");
const fourthGroup = groupDescriptions[3];
const newGroup4 = createGroup(fourthGroup);

groupDescription4.appendChild(newGroup4);

const groupDescription5 = document.querySelector(".groupDescription5");
const fifthGroup = groupDescriptions[4];
const newGroup5 = createGroup(fifthGroup);

groupDescription5.appendChild(newGroup5);

//J'ai crée des variables avec la même formule, je peux pas faire de boucle forEach comme
//sur le premier tableau, parce que array[0].ForEach sert à cibler un tableau dans
//un tableau, et en l'espèce il s'agit d'1 tableau contenant des objets

function createGroup(group) {
  const groupDiv = document.createElement("div");
  groupDiv.classList.add("groupDiv");
  groupDiv.innerHTML = `<h4>${group.titre} <img class="logo-des-groupes"src="${group.logo}"></img></h4>
                        <p class="group-txt">${group.description}</p>`;
  return groupDiv;
}

//Fonction du nom de createGroup, paramètre group.
//variable groupDiv crée une div,
//groupDiv.classList.add ajoute la classe "groupDiv" à la div,
//groupDiv.innerHTML ajouter les éléments à afficher
//return groupDiv sinon elle est inutilisable