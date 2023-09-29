//Tableau des personnes, eux même encapsulé dans des tableaux (1 tableau par groupe)
const personnes = [
    [
      {
        nom: "CHAUVEAU",
        prenom: "Mathieu",
        age: 33,
        image: "./Photos/RastaRockets/IMG_0014.jpg",
        description: "Talent: Imitations multiples",
        objectif: "Objectif professionnel: Vendre des applications qui changeront le monde",
        bref: "En bref: Bon client de la connerie universelle"
        // rajouter deux parametres type github/linkedin
      },

      {
        nom: "BARD",
        prenom: "Raphaël",
        age: 25,
        image: "./Photos/RastaRockets/IMG_0017.jpg",
        description: "Talent: Ne sait pas roter",
        objectif: "Objectif pro: Nomade Digital",
        bref: "En bref: La vie est un jeu"
      },

      {
        nom: "DUPONT",
        prenom: "Cédric",
        age: 26,
        image: "./Photos/RastaRockets/IMG_0019.jpg",
        description: "Talent: Très très bon vendeur",
        objectif: "Objectif professionnel: Nomade Digital",
        bref: ""
      },

      {
        nom: "Mcheik",
        prenom: "Mahdi",
        age: 0,
        image: "./Photos/RastaRockets/IMG_0020.jpg",
        description: "Talent: Praesent non erat nec neque lacinia fringilla.",
        objectif: "Objectif professionnel: Réussir dans la vie",
        bref: "En bref: "
      },

      {
        nom: "DELAIRE",
        prenom: "Marie",
        age: 29,
        image: "./Photos/RastaRockets/IMG_0022.jpg",
        description: "Talent: Incarne le talent lui-même",
        objectif: "Objectif professionnel: Gérer sa propre entreprise avec ses propres valeurs : on bosse, mais pas trop",
        bref: "En bref: « Est-ce que c’est bon pour vous ? » Octogone : Dimitri VS Squeezy"
      }
    ],
    [
      {
        nom: "dazdjnand",
        prenom: "Sylvain",
        age: 0,
        image: "./Photos/Les 4 Fantastiques/IMG_0037.jpg",
        description: "Vestibulum ut justo ut neque fringilla sodales.",
        objectif: "Réussir dans la vie"
      },
  
      {
        nom: "zefzhf",
        prenom: "David",
        age: 0,
        image: "./Photos/Les 4 Fantastiques/IMG_0038.jpg",
        description: "Vestibulum ut justo ut neque fringilla sodales.",
        objectif: "Réussir dans la vie"
      },

      {
        nom: "efionzofz",
        prenom: "Antoine",
        age: 0,
        image: "./Photos/Les 4 Fantastiques/IMG_0039.jpg",
        description: "Vestibulum ut justo ut neque fringilla sodales.",
        objectif: "Réussir dans la vie"
      },

      {
        nom: "Guyomard",
        prenom: "Victor",
        age: 0,
        image: "./Photos/Les 4 Fantastiques/IMG_0040.jpg",
        description: "Vestibulum ut justo ut neque fringilla sodales.",
        objectif: "Réussir dans la vie"
      }
    ],
    [
        {
          nom: "HARMACH",
          prenom: "Nassime",
          age: 21,
          image: "./Photos/Tango Charlie/IMG_0005.jpg",
          description: "Talent: Gps intégré dans son cerveau",
          objectif: "Objectif professionnel: Programmeur logiciel",
          bref: "En bref: La fin justifie les moyens"
          // rajouter deux parametres type github/linkedin
        },
  
        {
          nom: "LAURIE",
          prenom: "Cassiopée",
          age: 23,
          image: "./Photos/Tango Charlie/IMG_0008.jpg",
          description: "Talent: Voltige, avec des chevaux",
          objectif: "Hackeuse professionnelle",
          bref: "En bref: Hakuna matata"
        },
  
        {
          nom: "CAUVIN",
          prenom: "Annaëlle",
          age: 22,
          image: "./Photos/Tango Charlie/IMG_0009.jpg",
          description: "Talent: N'arrive pas à être en retard",
          objectif: "Objectif professionnel: Nomade Digital",
          bref: "En bref: « Je ne suis pas optimiste, je suis déterminée »"
        },
  
        {
          nom: "VALLEIX",
          prenom: "Aurore",
          age: 41,
          image: "./Photos/Tango Charlie/IMG_0011.jpg",
          description: "Talent: Touche son nez avec sa langue",
          objectif: "Objectif professionnel: Développer au quatres coins du monde",
          bref: "En bref: « Je vais bien, tout vas bien »"
        },
  
        {
          nom: "HAYET",
          prenom: "Benoit",
          age: 33,
          image: "./Photos/Tango Charlie/IMG_0012.jpg",
          description: "Talent: Réalise des peintures abstraites",
          objectif: "Objectif professionnel: Devenir Freelance",
          bref: "En bref: « Il n’y a rien de noble à être supérieur à vos semblables. La vraie noblesse est d’être supérieur à celui que vous avez été auparavant »"
        }
    ],
    [
        {
          nom: "BRUN",
          prenom: "Florian",
          age: 33,
          image: "./Photos/The OG/IMG_9996.jpg",
          description: "Talent: Roi du cookéo",
          objectif: "Objectif professionnel: Aspirer à un meilleur cadre de vie",
          bref: "En bref: Fidèle comme son ombre"
          // rajouter deux parametres type github/linkedin
        },
  
        {
          nom: "GARCIA",
          prenom: "Victor",
          age: 28,
          image: "./Photos/The OG/IMG_9997.jpg",
          description: "Talent: Peux manger un bucket pour deux + les deux frites au KFC, et un burger en plus",
          objectif: "Objectif pro: Joueur e-sport",
          bref: "En bref: « Tu vas finir ton sandwich ? »"
        },
  
        {
          nom: "DUPONT",
          prenom: "Cédric",
          age: 26,
          image: "./Photos/RastaRockets/IMG_0019.jpg",
          description: "Talent: Très très bon vendeur",
          objectif: "Objectif professionnel: Nomade Digital"
        },
  
        {
          nom: "Mcheik",
          prenom: "Mahdi",
          age: 0,
          image: "./Photos/RastaRockets/IMG_0020.jpg",
          description: "Talent: Praesent non erat nec neque lacinia fringilla.",
          objectif: "Objectif professionnel: Réussir dans la vie",
          bref: "En bref: "
        },
  
        {
          nom: "DELAIRE",
          prenom: "Marie",
          age: 29,
          image: "./Photos/RastaRockets/IMG_0022.jpg",
          description: "Talent: Incarne le talent lui-même",
          objectif: "Objectif professionnel: Gérer sa propre entreprise avec ses propres valeurs : on bosse, mais pas trop",
          bref: "En bref: « Est-ce que c’est bon pour vous ? » Octogone : Dimitri VS Squeezy"
        }
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

    
personnes[3].forEach((personne) => {
const card = createPersonneCard(personne);
divGroupes4.appendChild(card);
     }); 

const divGroupes5 = document.querySelector(".div-groupes5");


personnes[4].forEach((personne) => {
const card = createPersonneCard(personne);
divGroupes5.appendChild(card);
     }); 

//^ Ici, VSCode comprends personnes[0].forEach = l'objet à l'index 0
//du tableau personnes. Le paramètre de forEach est (personne), qui
//devient le modèle de l'objet à l'index 0 du tableau personnes.

function createPersonneCard(personne) {
    const card = document.createElement("div");
    card.classList.add("personne-card");
    const cardList = document.querySelectorAll(".personne-card")
     
    for (let i = 1; i < cardList.length; i += 2) {
        cardList[i].classList.add("reversed");
        };

    card.innerHTML = `
        <img src="${personne.image}" alt="${personne.nom}">
        <h3>${personne.prenom} ${personne.nom}</h3>
        <p> ${personne.age} </br> 
        ${personne.description} </br>
        ${personne.objectif}</p>
    `
    return card;
};

// ^ Création de la fonction createCardPersonne(personne), qui sera appelée grâce
// à (personne) et qui permettra de créer une div, lui donner la class personne-card
// et écrire dans le HTML les valeurs contenues dans l'objet personne.