//Tableau des personnes, eux même encapsulé dans des tableaux (1 tableau par groupe)
const personnes = [
    [
      {
        nom: "Geséplu",
        prenom: "Mathieu",
        image: "./Photos/RastaRockets/IMG_0014.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        objectif: "Réussir dans la vie"
      },
      {
        nom: "Bard",
        prenom: "Raphaël",
        image: "./Photos/RastaRockets/IMG_0017.jpg",
        description: "Praesent non erat nec neque lacinia fringilla.",
        objectif: "Réussir dans la vie"
      },
      {
        nom: "Bard",
        prenom: "Cédric",
        image: "./Photos/RastaRockets/IMG_0019.jpg",
        description: "Praesent non erat nec neque lacinia fringilla.",
        objectif: "Réussir dans la vie"
      },
      {
        nom: "Bard",
        prenom: "Mahdi",
        image: "./Photos/RastaRockets/IMG_0020.jpg",
        description: "Praesent non erat nec neque lacinia fringilla.",
        objectif: "Réussir dans la vie"
      },
      {
        nom: "Bard",
        prenom: "Marie",
        image: "./Photos/RastaRockets/IMG_0022.jpg",
        description: "Praesent non erat nec neque lacinia fringilla.",
        objectif: "Réussir dans la vie"
      }
    ],
    [
      {
        nom: "Johnson",
        prenom: "dezodjnzoe",
        image: "robert.jpg",
        description: "Vestibulum ut justo ut neque fringilla sodales.",
        objectif: "Réussir dans la vie"
      },
  
      {
        nom: "Pierre",
        prenom: "Jean",
        image: "jean.jpg",
        description: "Vestibulum ut justo ut neque fringilla sodales.",
        objectif: "Réussir dans la vie"
      }
    ]
  ];

//Crée la variable grid1 pour stocker l'élément html #grid1
const grid1 = document.querySelector("#grid1");
//Pour chaque (personne) dans le tableau personne[0], créer une card,
//qui est égale ) à la fonction createPersonneCard(personne).


personnes[0].forEach((personne) => {
const card = createPersonneCard(personne);
grid1.appendChild(card);

});

//^ Ici, VSCode comprends personnes[0].forEach = l'objet à l'index 0
//du tableau personnes. Le paramètre de forEach est (personne), qui
//devient le modèle de l'objet à l'index 0 du tableau personnes.

function createPersonneCard(personne) {
    const card = document.createElement("div");
    card.classList.add("personne-card");
    card.innerHTML = `
        <img src="${personne.image}" alt="${personne.nom}">
        <h3>${personne.prenom} ${personne.nom}</h3>
        <p>${personne.description} ${personne.objectif}</p>
    `
    return card;
};

// ^ Création de la fonction createCardPersonne(personne), qui sera appelée grâce
// à (personne) et qui permettra de créer une div, lui donner la class personne-card
// et écrire dans le HTML les valeurs contenues dans l'objet personne.