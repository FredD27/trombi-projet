//CONTENU BODY DESKTOP

//Tableau des personnes, eux même encapsulé dans des tableaux (1 tableau par groupe)

const personnes = [
  [
    {
      nom: "CHAUVEAU",
      prenom: "Mathieu",
      // age: 33,
      image: "./Photos/Rasta-Rockets/IMG_0014.jpg",
      description: "Talent: Imitations multiples",
      objectif:
        "Objectif professionnel: Vendre des applications qui changeront le monde",
      bref: "En bref: Bon client de la connerie universelle",
      linkedIn: "https://www.linkedin.com/in/mathieu-chauveau-a21393291/",
      gitHub: "https://github.com/MatCabdel",
    },

    {
      nom: "BARD",
      prenom: "Raphaël",
      //  age: 25,
      image: "./Photos/Rasta-Rockets/IMG_0017.jpg",
      description: "Talent: Ne sait pas roter",
      objectif: "Objectif pro: Nomade Digital",
      bref: "En bref: La vie est un jeu",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "DUPONT",
      prenom: "Cédric",
      //  age: 26,
      image: "./Photos/Rasta-Rockets/IMG_0019.jpg",
      description: "Talent: Très très bon vendeur",
      objectif: "Objectif professionnel: Nomade Digital",
      bref: "",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "MCHEIK",
      prenom: "Mahdi",
      //  age: "20 + 17 ans",
      image: "./Photos/Rasta-Rockets/IMG_0020.jpg",
      description: "Talent: « Je dessine gavé bien »",
      objectif: "Objectif professionnel: Développeur d'applications",
      bref: "En bref: « Parfois, il ne faut pas seulement tourner la page, il faut changer de livre »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "DELAIRE",
      prenom: "Marie",
      //  age: 29,
      image: "./Photos/Rasta-Rockets/IMG_0022.jpg",
      description: "Talent: Incarne le talent lui-même",
      objectif:
        "Objectif professionnel: Gérer sa propre entreprise avec </br> ses propres valeurs : on bosse, mais pas trop",
      bref: "En bref: « Est-ce que c’est bon pour vous ? » -Octogone : Dimitri VS Squeezy",
      linkedIn: "https://www.linkedin.com/in/marie-delaire-dev/",
      gitHub: "https://github.com/Hepsox",
    },
  ],
  [
    {
      nom: "BONNAURE",
      prenom: "Sylvain",
      //  age: "Pas assez vieux pour connaître woodstuck",
      image: "./Photos/Les-4-Fantastiques/IMG_0037.jpg",
      description:
        "Talent: Créateur du cocktail officiel </br> du festival burlesque de Montréal",
      objectif:
        "Objectif professionnel: Vivre sa </br> meilleure vie (près de l'océan)",
      bref: "En bref: Qui ne tente rien n'a rien",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "DURANTY",
      prenom: "David",
      //  age: 48,
      image: "./Photos/Les-4-Fantastiques/IMG_0038.jpg",
      description: "Talent: Triche avec son vélo électrique",
      objectif:
        "Objectif professionnel: Devenir meilleur </br> que Dimitri (a.k.a: Dieu)",
      bref: "En bref: « T'inquiètes, je gère »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "CAIREY",
      prenom: "Antoine",
      //  age: 27,
      image: "./Photos/Les-4-Fantastiques/IMG_0039.jpg",
      description: "Talent: Champion de géoguessr",
      objectif: "Objectif professionnel: Devenir </br> Elon Musk en mieux",
      bref: "En bref: « Chauve qui peut ! »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "GUYOMARD",
      prenom: "Victor",
      //  age: 24,
      image: "./Photos/Les-4-Fantastiques/IMG_0040.jpg",
      description: "Talent: Décapsule une bière, </br> avec une autre bière",
      objectif: "Objectif professionnel: Devenir Président",
      bref: "En bref: Les plus belles années d’une vie </br> sont celles que l’ont a pas encore vécues",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },
  ],
  [
    {
      nom: "HARMACH",
      prenom: "Nassime",
      //  age: 21,
      image: "./Photos/Tango-Charlie/IMG_0005.jpg",
      description: "Talent: Gps intégré dans son cerveau",
      objectif: "Objectif professionnel: Programmeur logiciel",
      bref: "En bref: La fin justifie les moyens",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "LAURIE",
      prenom: "Cassiopée",
      //  age: 23,
      image: "./Photos/Tango-Charlie/IMG_0008.jpg",
      description: "Talent: Voltige, avec des chevaux",
      objectif: "Hackeuse professionnelle",
      bref: "En bref: Hakuna matata",
      linkedIn: "https://www.linkedin.com/in/cassiop%C3%A9e-laurie-9a2022198/",
      gitHub: " https://github.com/cassiopeelaurie",
    },

    {
      nom: "CAUVIN",
      prenom: "Annaëlle",
      //  age: 22,
      image: "./Photos/Tango-Charlie/IMG_0009.jpg",
      description: "Talent: N'arrive pas à être en retard",
      objectif: "Objectif professionnel: Nomade Digital",
      bref: "En bref: « Je ne suis pas optimiste, </br> je suis déterminée »",
      linkedIn: "https://github.com/Ellana33",
      gitHub: "https://github.com/Ellana33",
    },

    {
      nom: "VALLEIX",
      prenom: "Aurore",
      //  age: 41,
      image: "./Photos/Tango-Charlie/IMG_0011.jpg",
      description: "Talent: Touche son nez avec sa langue",
      objectif:
        "Objectif professionnel: Développer au </br> quatres coins du monde",
      bref: "En bref: « Je vais bien, tout vas bien »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "HAYET",
      prenom: "Benoit",
      //  age: 33,
      image: "./Photos/Tango-Charlie/IMG_0012.jpg",
      description: "Talent: Réalise des peintures abstraites",
      objectif: "Objectif professionnel: Devenir Freelance",
      bref: "En bref: « Il n’y a rien de noble à être </br> supérieur à vos semblables. La vraie </br> noblesse est d’être supérieur à celui </br> que vous avez été auparavant »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/Benoit-Hayet",
    },
  ],
  [
    {
      nom: "BRUN",
      prenom: "Florian",
      //  age: 33,
      image: "./Photos/The-OG/IMG_9996.jpg",
      description: "Talent: Roi du cookéo",
      objectif:
        "Objectif professionnel: Aspirer à un </br> meilleur cadre de vie",
      bref: "En bref: Fidèle comme son ombre",
      linkedIn: "https://www.linkedin.com/in/florian-b-09544b255/",
      gitHub: "https://github.com/BRUNFlorian",
    },

    {
      nom: "GARCIA",
      prenom: "Victor",
      //   age: 28,
      image: "./Photos/The-OG/IMG_9997.jpg",
      description:
        "Talent: Peux manger un bucket pour </br> deux + les deux frites au KFC, et un </br> burger en plus",
      objectif: "Objectif pro: Joueur e-sport",
      bref: "En bref: « Ca geek ce soir ? »",
      linkedIn: "https://www.linkedin.com/in/victorgj95/",
      gitHub: "https://github.com/Ractag",
    },

    {
      nom: "HEMAMOU",
      prenom: "Adam",
      //  age: 26,
      image: "./Photos/The-OG/IMG_9998.jpg",
      description: "Talent: Chaud sur overwatch",
      objectif: "Objectif professionnel: Finir le caroussel",
      bref: "En bref: « J'en ai marre du caroussel »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "DRUET",
      prenom: "Frédérique",
      //    age: "« Pas très vieille »",
      image: "./Photos/The-OG/IMG_9999.jpg",
      description: "Talent: As de CSS",
      objectif: "Objectif professionnel: Survivre à la WCS",
      bref: "En bref: « J'aime pas Javascript »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/FredD27",
    },
  ],
  [
    {
      nom: "ABAJOLI",
      prenom: "Leslie",
      //  age: 34,
      image: "./Photos/Totally-Spies/IMG_0026.jpg",
      description: "Talent: Danse très bien </br> sur de l'afro rythm",
      objectif:
        "Objectif professionnel: </br> Développeuse web riche </br> et célèbre",
      bref: "En bref: « Tout ce qui </br> est petit est mignon »",
      linkedIn: "https://www.linkedin.com/in/leslie-abajoli/",
      gitHub: " https://github.com/LeslieCore34",
    },

    {
      nom: "BORDES",
      prenom: "Lucas",
      //  age: 48,
      image: "./Photos/Totally-Spies/IMG_0028.jpg",
      description: "Talent: Décapsuler des bières </br> avec les pieds",
      objectif:
        "Objectif professionnel: Survivre à une </br> autre journée à la Wild",
      bref: "En bref: « Ce n’est pas l’émotion qui </br> définie l’expression mais </br> l’expression qui définie l’émotion »",
      linkedIn: "https://www.linkedin.com/in/lucas-bordes-1b2918261/",
      gitHub: "https://github.com/lulb11",
    },

    {
      nom: "VANNIER",
      prenom: "Claire",
      //  age: "Pas assez grande pour atteindre la dernière étagère",
      image: "./Photos/Totally-Spies/IMG_0032.jpg",
      description: "Talent: Chanter sous la douche",
      objectif:
        "Objectif professionnel: Apporter </br> aux autres ce </br> qu'on lui a apporté",
      bref: "En bref: Réussir c'est prendre </br> le risque d'échouer",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
      gitHub: "https://github.com/bfsylvain",
    },

    {
      nom: "COURTAIS",
      prenom: "Nélia",
      //  age: "Pas assez grande pour maîtriser le code",
      image: "./Photos/Totally-Spies/IMG_0034.jpg",
      description: "Talent: Trop bien caché",
      objectif:
        "Objectif professionnel: </br> Alternance et vivre de son travail",
      bref: "En bref: « Some people live more in </br> 20 years than others do in 80, </br> it’s not the time that matters, </br> it’s the person »",
      linkedIn: "https://www.linkedin.com/in/sylvain-bonnaure/",
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
  // alors ajoute la classe 'reversed' à l'élément HTML représenté par la variable card.
  // if (cardCounter % 2 === 1) {
  //   card.classList.add("reversed");
  // }

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
// Ceci est le tableau qui contient la liste des différents groupe de la promotion JavaScript --->

// Ici, VSCode comprends personnes[0].forEach = l'objet à l'index 0
// du tableau personnes. Le paramètre de forEach est (personne), qui
// devient le modèle de l'objet à l'index 0 du tableau personnes.

function createPersonneCard(personne) {
  const card = document.createElement("div");
  card.classList.add("personne-card");
  const cardList = document.querySelectorAll(".personne-card");

  for (let i = 1; i < cardList.length; i += 2) {
    cardList[i].classList.add("reversed");
  }

  card.innerHTML = `
        <div class="listPersonnel"><img id="minimage"src="${personne.image}" alt="${personne.nom}">
        <h3>${personne.prenom} ${personne.nom}</h3>
        <div class="listLogo"><a href="${personne.linkedIn}" target="_blank"><img id="logoLinkedin" src="./images/Linkedin.png"></img></a>
        <a href="${personne.gitHub}" target="_blank"><img id="logoGitHub" src="./images/logoGitHub.png"></img></a></div>
        </div>
    `;
  return card;
}

// ^ Création de la fonction createCardPersonne(personne), qui sera appelée grâce
// à (personne) et qui permettra de créer une div, lui donner la class personne-card
// et écrire dans le HTML les valeurs contenues dans l'objet personne.
