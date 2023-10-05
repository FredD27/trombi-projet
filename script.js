// NAVBAR
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var topBtn = document.querySelector(".top_btn");
  if (scrollPosition > 200) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

const groupDescriptions = [
  {
    alias: "rasta-rockets",
    titre: "Les Rasta Rockets",
    logo: "./images/rastaRockett.jpg",
    currentSlideIndex: 0,
    gens: [
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
        gitHub: "https://github.com/MatCabdel",
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
        gitHub: "https://github.com/bfsylvain",
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
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "MCHEIK",
        prenom: "Mahdi",
        age: "20 + 17",
        image: "./Photos/Rasta-Rockets/IMG_0020.jpg",
        description: "<strong>Talent:</strong> « Je dessine gavé bien »",
        objectif:
          "<strong>Objectif professionnel:</strong> Développeur d'applications",
        bref: "<strong>En bref:</strong> « Parfois, il ne faut pas seulement tourner la page, il faut changer de livre »",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
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
        gitHub: "https://github.com/Hepsox",
      },
    ],
    description:
      "Chacun d'entre nous apporte ses compétences uniques, que ce soit en design web, en collecte de données, en développement ou en photographie pour créer une ressource complète et attractive. Nous croyons fermement que les bars locaux sont des joyaux de la vie nocturne, et nous voulons les mettre en lumière.",
  },
  {
    alias: "les-fantastiques",
    titre: "Les Quatres Fantastiques",
    logo: "images/les4Fantastiques.jpeg",
    currentSlideIndex: 0,
    gens: [
      {
        nom: "BONNAURE",
        prenom: "Sylvain",
        age: "Pas assez vieux pour connaître woodstuck",
        image: "./Photos/Les-4-Fantastiques/IMG_0037.jpg",
        description:
          "<strong>Talent:</strong> Créateur du cocktail officiel du festival burlesque de Montréal",
        objectif:
          "<strong>Objectif professionnel:</strong> Vivre sa meilleure vie (près de l'océan)",
        bref: "<strong>En bref:</strong> Qui ne tente rien n'a rien",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
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
        gitHub: "https://github.com/davidduranty",
      },

      {
        nom: "CAIREY",
        prenom: "Antoine",
        age: 27,
        image: "./Photos/Les-4-Fantastiques/IMG_0039.jpg",
        description: "<strong>Talent:</strong> Champion de géoguessr",
        objectif:
          "<strong>Objectif professionnel:</strong> Devenir Elon Musk en mieux",
        bref: "<strong>En bref:</strong> « Chauve qui peut ! »",
        linkedin: "https://www.linkedin.com/in/antoine-cairey/",
        gitHub: "https://github.com/AntoineCairey",
      },

      {
        nom: "GUYOMARD",
        prenom: "Victor",
        age: 24,
        image: "./Photos/Les-4-Fantastiques/IMG_0040.jpg",
        description:
          "<strong>Talent:</strong> Décapsule une bière, avec une autre bière",
        objectif: "<strong>Objectif professionnel:</strong> Devenir Président",
        bref: "<strong>En bref:</strong> Les plus belles années d’une vie sont celles que l’ont a pas encore vécues",
        linkedin: "https://www.linkedin.com/in/victor-guyomard-b8b432158/",
        gitHub: "https://github.com/bfsylvain",
      },
    ],
    description:
      "Les 4 Fantastiques : Quatre cerveaux brillants, un seul objectif - dominer le monde du développement ! Avec Antoine, David, Sylvain et Victor, la technologie n'a qu'à bien se tenir. Préparez-vous à des lignes de code incroyables et à des solutions informatiques qui vous laisseront sans voix.",
  },
  {
    alias: "tango-charlie",
    titre: "Tango Charlie",
    logo: "images/alphaTangoCharlie.jpg",
    currentSlideIndex: 0,
    gens: [
      {
        nom: "HARMACH",
        prenom: "Nassime",
        age: 21,
        image: "./Photos/Tango-Charlie/IMG_0005.jpg",
        description: "<strong>Talent: </strong>Gps intégré dans son cerveau",
        objectif:
          "<strong>Objectif professionnel: </strong>Programmeur logiciel",
        bref: "<strong>En bref:</strong> La fin justifie les moyens",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "LAURIE",
        prenom: "Cassiopée",
        age: 23,
        image: "./Photos/Tango-Charlie/IMG_0008.jpg",
        description: "<strong>Talent:</strong> Voltige, avec des chevaux",
        objectif:
          "<strong>Objectif professionnel:</strong> Hackeuse professionnelle",
        bref: "<strong>En bref:</strong> Hakuna matata",
        linkedin: "#",
        gitHub: "https://github.com/cassiopeelaurie",
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
        gitHub: "https://github.com/Ellana33",
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
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "HAYET",
        prenom: "Benoit",
        age: 33,
        image: "./Photos/Tango-Charlie/IMG_0012.jpg",
        description:
          "<strong>Talent:</strong> Réalise des peintures abstraites",
        objectif: "<strong>Objectif professionnel:</strong> Devenir Freelance",
        bref: "<strong>En bref:</strong> « Il n’y a rien de noble à être supérieur à vos semblables. La vraie noblesse est d’être supérieur à celui que vous avez été auparavant »",
        linkedin: "#",
        gitHub: "https://github.com/Benoit-Hayet",
      },
    ],
    description:
      "Les Rasta Rockets, contre toute attente, ne sont pas des Rastas. Ce groupe de 5 développeurs web en puissance est sympathique et doué en code, surtout si vous cherchez les meilleurs bars du coin.",
  },
  {
    alias: "the-OG",
    titre: "Les OGs",
    logo: "images/theOg.png",
    currentSlideIndex: 0,
    gens: [
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
        gitHub: "https://github.com/bfsylvain",
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
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "HEMAMOU",
        prenom: "Adam",
        age: 26,
        image: "./Photos/The-OG/IMG_9998.jpg",
        description: "<strong>Talent:</strong> Chaud sur overwatch",
        objectif:
          "<strong>Objectif professionnel:</strong> Devenir contorsionniste",
        bref: "<strong>En bref:</strong> « Rentrer dans un micro-onde »",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "DRUET",
        prenom: "Frédérique",
        age: "« Pas très vieille »",
        image: "./Photos/The-OG/IMG_9999.jpg",
        description:
          "<strong>Talent: </strong>Bouge ses oreilles sans les toucher",
        objectif:
          "<strong>Objectif professionnel:</strong> Comédie-dev à plein temps",
        bref: "<strong>En bref: </strong>« Ne fais pas aux autres ce que tu n'aimerais pas qu'on te fasse »",
        linkedin: "https://www.linkedin.com/in/fred-druet-855b58293/",
        gitHub: "https://github.com/FredD27",
      },
    ],
    description:
      "Les Rasta Rockets, contre toute attente, ne sont pas des Rastas. Ce groupe de 5 développeurs web en puissance est sympathique et doué en code, surtout si vous cherchez les meilleurs bars du coin.",
  },
  {
    alias: "totally-spies",
    titre: "Les Totally Spies",
    logo: "images/tottallySpies.jpg",
    currentSlideIndex: 0,
    gens: [
      {
        nom: "ABAJOLI",
        prenom: "Leslie",
        age: 34,
        image: "./Photos/Totally-Spies/IMG_0026.jpg",
        description:
          "<strong>Talent:</strong> Danse très bien sur de l'afro rythm",
        objectif:
          "<strong>Objectif professionnel: </strong>Développeuse web riche et célèbre",
        bref: "<strong>En bref:</strong> « Tout ce qui est petit est mignon »",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "BORDES",
        prenom: "Lucas",
        age: 48,
        image: "./Photos/Totally-Spies/IMG_0028.jpg",
        description:
          "<strong>Talent: </strong>Décapsuler des bières avec les pieds",
        objectif:
          "<strong>Objectif professionnel:</strong> Survivre à une autre journée à la Wild",
        bref: "<strong>En bref:</strong> « Ce n’est pas l’émotion qui définie l’expression mais l’expression qui définie l’émotion »",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "VANNIER",
        prenom: "Claire",
        age: "Pas assez grande pour atteindre la dernière étagère",
        image: "./Photos/Totally-Spies/IMG_0032.jpg",
        description: "<strong>Talent:</strong> Chanter sous la douche",
        objectif:
          "<strong>Objectif professionnel:</strong> Apporter aux autres ce qu'on lui a apporté",
        bref: "<strong>En bref:</strong> Réussir c'est prendre le risque d'échouer",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
      },

      {
        nom: "COUTAIS",
        prenom: "Nélia",
        age: "Pas assez grande pour maîtriser le code",
        image: "./Photos/Totally-Spies/IMG_0034.jpg",
        description: "<strong>Talent:</strong> Trop bien caché",
        objectif:
          "<strong>Objectif professionnel:</strong> Alternance et vivre de son travail",
        bref: "<strong>En bref:</strong> « Some people live more in 20 years than others do in 80, it’s not the time that matters, it’s the person »",
        linkedin: "https://www.linkedin.com/in/sylvain-bonnaure/",
        gitHub: "https://github.com/bfsylvain",
      },
    ],
    description:
      "Trois jeunes filles, Nelia, Claire et Leslie, mènent une double vie en tant qu'espionnes pour l'organisation secrète ZenList, dirigée par Jerry, tout en jonglant avec les défis de la vie quotidienne d'étudiants à la wild code School!",
  },
];

iconsBurger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("nav li").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const aliasGenerator = (group) => {
  const navbarList = document.getElementById("navbar-list");

  if(!navbarList) {
    return;
  }

  navbarList.innerHTML += `
  <li>
    <a href="#${group.alias}">${group.titre}</a>
  </li>`;
};

const nextSlide = (node, index, imageDescription) => {
  groupDescriptions[index].currentSlideIndex++;
  if (
    groupDescriptions[index].currentSlideIndex >=
    groupDescriptions[index].gens.length
  ) {
    groupDescriptions[index].currentSlideIndex = 0;
  }
  loadCurrentSlide(
    node,
    groupDescriptions[index].gens[groupDescriptions[index].currentSlideIndex]
      .image
  );
  imageDescription.textContent = "";
};

const prevSlide = (node, index, imageDescription) => {
  groupDescriptions[index].currentSlideIndex--;
  if (groupDescriptions[index].currentSlideIndex < 0) {
    groupDescriptions[index].currentSlideIndex =
      groupDescriptions[index].gens.length - 1;
  }
  loadCurrentSlide(
    node,
    groupDescriptions[index].gens[groupDescriptions[index].currentSlideIndex]
      .image
  );
  imageDescription.textContent = "";
};

const loadCurrentSlide = (node, imgPath) => {
  node.innerHTML = `
    <div class="carousel-slide">
      <img src="${imgPath}" loading="lazy" />
    </div>
  `;
};

const carouselGenerator = (group, index) => {
  const smallContainer = document.querySelector(".small-container");

  if(!smallContainer) {
    return;
  }

  smallContainer.innerHTML += `
    <div id="${group.alias}">
      <div class="groupDescription${index + 1}"></div>

      <div class="carousel-container">
        <div class="arrow">
          <button class="arrow_button arrow_button_prev" id="prev-${index + 1}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button class="arrow_button arrow_button_next" id="next-${index + 1}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div class="carousel" id="carousel${index + 1}"></div>

        <div class="imageDescription${index + 1}" id="imageDescription${index + 1
    }"></div>
      </div>
    </div>
    <div class="la-barre"></div>
  `;

  loadCurrentSlide(
    document.getElementById(`carousel${index + 1}`),
    group.gens[group.currentSlideIndex].image
  );
  generateGroupDescription(group, index)
};

const setSwipeListener = () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const index = carousel.id.replace("carousel", "");
    const imageDescription = document.getElementById(
      `imageDescription${index}`
    );

    carousel.addEventListener("click", function () {
      imageDescription.textContent =
        groupDescriptions[index - 1].gens[groupDescriptions[index - 1].currentSlideIndex].description;
    });
    // _______________________________
    let touchStartX = null;
    let touchEndX = null;

    carousel.addEventListener("touchstart", function (event) {
      touchStartX = event.touches[0].clientX;
    });

    carousel.addEventListener("touchmove", function (event) {
      touchEndX = event.touches[0].clientX;
    });

    carousel.addEventListener("touchend", function () {
      if (touchStartX !== null && touchEndX !== null) {
        const deltaX = touchEndX - touchStartX;
        if (deltaX > 0) {
          prevSlide(carousel, index - 1, imageDescription);
        } else if (deltaX < 0) {
          nextSlide(carousel, index - 1, imageDescription);
        }
      }

      touchStartX = null;
      touchEndX = null;
    });
  });
};

const createPersonneCard = (personne) => {
  const card = document.createElement("div");
  card.classList.add("personne-card");

  card.innerHTML = `
  <div class="personnel">
    <img class="img-perso" src="${personne.image}" alt="${personne.nom}" loading="lazy" />
    <h3>${personne.prenom} ${personne.nom} ${personne.age}</h3>
    <p class="card-txt"> ${personne.description} </br>${personne.objectif} </br>${personne.bref} </br></p>
    <div class="double-logo">
      <a href="${personne.linkedin}" target="_blank">
        <img id="logoLinkedin" src="./images/LinkedIn.png" loading="lazy" />
      </a> 
      <a href="${personne.gitHub}" target="_blank">
        <img id="logoGitHub" src="./images/logoGitHub.png" loading="lazy" />
      </a>
    </div>
  </div>
  `;
  return card;
};

const generateDivGroup = (group, index) => {
  const divGroupes = document.querySelector(`.div-groupes${index}`);

  if(!divGroupes) {
    return;
  }

  group.gens.forEach((personne) => {
    const card = createPersonneCard(personne);
    divGroupes.appendChild(card);
  });
};
const setCarouselButtonListener = () => {
  const buttons = document.querySelectorAll(".arrow_button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonId = event.target.parentElement.id;
      let index;
      if (!buttonId) {
        return;
      }

      if (buttonId.startsWith("next")) {
        index = buttonId.replace("next-", "");
        nextSlide(
          document.getElementById(`carousel${index}`),
          +index - 1,
          document.getElementById(`imageDescription${index}`)
        );
      } else if (buttonId.startsWith("prev")) {
        index = buttonId.replace("prev-", "");
        prevSlide(
          document.getElementById(`carousel${index}`),
          +index - 1,
          document.getElementById(`imageDescription${index}`)
        );
      }
    });
  });
};

const createGroup = (group) => {
  const groupDiv = document.createElement("div");
  groupDiv.classList.add("groupDiv");
  groupDiv.innerHTML = `
    <h4>
      ${group.titre}
      <img class="logo-des-groupes"src="${group.logo}" loading="lazy" />
    </h4>
    <p class="group-txt">${group.description}</p>
  `;
  return groupDiv;
}
const generateGroupDescription = (group, index) => {
  const groupDescription = document.querySelector(`.groupDescription${index + 1}`);

  if (!groupDescription) {
    return;
  }

  const newGroup = createGroup(group);
  //variable groupDescription1 = la div qui va contenir la description du groupe
  //firstGroup va contenir l'objet du tableau groupDescriptions à l'index 0
  //newGroup est la variable qui appelle la fonction createGroup et l'argument
  //permet de l'insérer dans firstGroup

  groupDescription.appendChild(newGroup);
}
// CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  //Crée la variable div-groupes pour stocker l'élément html #div-groupes

  groupDescriptions.forEach((group, index) => {
    generateGroupDescription(group, index)
    carouselGenerator(group, index);
    generateDivGroup(group, index + 1);
    aliasGenerator(group);
  });

  setCarouselButtonListener();
  setSwipeListener();

  if (document.getElementById("navbar-list")) {
    document.getElementById("navbar-list").innerHTML += `<li><a href="index2.html">TrombiList</a></li>`;
  }
});

//Fonction du nom de createGroup, paramètre group.
//variable groupDiv crée une div,
//groupDiv.classList.add ajoute la classe "groupDiv" à la div,
//groupDiv.innerHTML ajouter les éléments à afficher
//return groupDiv sinon elle est inutilisable
