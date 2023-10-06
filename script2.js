// NAVBAR
iconsBurger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("nav li").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
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
  [
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
      description: "<strong>Talent:</strong> Réalise des peintures abstraites",
      objectif: "<strong>Objectif professionnel:</strong> Devenir Freelance",
      bref: "<strong>En bref:</strong> « Il n’y a rien de noble à être supérieur à vos semblables. La vraie noblesse est d’être supérieur à celui que vous avez été auparavant »",
      linkedin: "#",
      gitHub: "https://github.com/Benoit-Hayet",
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
  [
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
      nom: "COURTAIS",
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
];

// Filtre tableau !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const searchPerson = document.querySelector(".searchContainer");
// const addPerson = document.createElement("div");
// searchPerson.appendChild(addPerson);
// const valueInput = document.getElementById("searchPeople");
// const valuePeople = valueInput.value;

// console.log(valuePeople);

//Crée la variable group-list pour stocker l'élément html #r
afficherTableau("");

function afficherTableau(name) {
  const divGroupes = document.querySelector(".group-list1");

  personnes[0].forEach((personne) => {
    if (
      name === "" ||
      personne.nom.toUpperCase().includes(name.toUpperCase()) ||
      personne.prenom.toUpperCase().includes(name.toUpperCase())
    ) {
      const card = createPersonneCard2(personne);
      divGroupes.appendChild(card);
    }
  });

  const divGroupes2 = document.querySelector(".group-list2");

  personnes[1].forEach((personne) => {
    if (
      name === "" ||
      personne.nom.toUpperCase().includes(name.toUpperCase()) ||
      personne.prenom.toUpperCase().includes(name.toUpperCase())
    ) {
      const card = createPersonneCard2(personne);
      divGroupes2.appendChild(card);
    }
  });

  const divGroupes3 = document.querySelector(".group-list3");

  personnes[2].forEach((personne) => {
    if (
      name === "" ||
      personne.nom.toUpperCase().includes(name.toUpperCase()) ||
      personne.prenom.toUpperCase().includes(name.toUpperCase())
    ) {
      const card = createPersonneCard2(personne);
      divGroupes3.appendChild(card);
    }
  });

  const divGroupes4 = document.querySelector(".group-list4");
  let cardCounter = 0;

  personnes[3].forEach((personne) => {
    if (
      name === "" ||
      personne.nom.toUpperCase().includes(name.toUpperCase()) ||
      personne.prenom.toUpperCase().includes(name.toUpperCase())
    ) {
      const card = createPersonneCard2(personne);
      divGroupes4.appendChild(card);

      cardCounter++;
    }
  });

  const divGroupes5 = document.querySelector(".group-list5");
  let cardCount = 0;

  personnes[4].forEach((personne) => {
    if (
      name === "" ||
      personne.nom.toUpperCase().includes(name.toUpperCase()) ||
      personne.prenom.toUpperCase().includes(name.toUpperCase())
    ) {
      const card = createPersonneCard2(personne);
      divGroupes5.appendChild(card);
      if (cardCount % 2 === 1) {
        card.classList.add("reversed");
      }

      cardCount++;
    }
  });
}

function createPersonneCard2(personne) {
  const card = document.createElement("div");
  card.classList.add("cardPersonnel");

  // for (let i = 1; i < cardList.length; i += 2) {
  //   cardList[i].classList.add("reversed");
  // }

  card.innerHTML = `
  <img id="minimage"src="${personne.image}" alt="${personne.nom}">
  <div class="listPersonnel">
            <h3>${personne.prenom} ${personne.nom}</h3>
            <div class="listLogo"><a href="${personne.linkedIn}" target="_blank"><img id="logoLinkedin" src="./images/Linkedin.png"></img></a>
            <a href="${personne.gitHub}" target="_blank"><img id="logoGitHub" src="./images/logoGitHub.png"></img></a></div>
            </div>
        `;
  return card;
}

function filtrerNom(name) {
  elements = document.getElementsByClassName("group-list");
  for (let elt of elements) {
    while (elt.firstChild) {
      elt.removeChild(elt.firstChild);
    }
  }
  afficherTableau(name);
}

const input = document.getElementById("filtre");

input.addEventListener("input", function () {
  const valeur = input.value;
  filtrerNom(valeur);
});
