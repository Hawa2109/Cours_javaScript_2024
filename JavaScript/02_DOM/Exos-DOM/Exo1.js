// alert("Yes");

//  On veut insérer un paragraphe juste avant le paragraphe avec l'id "reference"

// 1- Créer un nouvel élément <p> 
let nouveauParagraphe = document.createElement("p");
//  2- ajouter du texte à ce paragraphe 
nouveauParagraphe.textContent = "Je suis le nouveau paragraphe inséré.";
//  3- selectionner le conteneur et lélément de référence 
let conteneur = document.querySelector(".conteneur");
let reference = document.querySelector("#reference");
//  4- insérer le nouveau paragraphe avant l'élément qui a l'id "reference"
// premiére façon
// conteneur.insertBefore(nouveauParagraphe, reference);
// deuxiéme façon 
reference.insertAdjacentElement("beforebegin", nouveauParagraphe);
// targetElement.insertAdjacentElement(position, element);

// - Les positions
// afterbegin : insère l'element à l'intérieur de la balise mais en avant
// beforeend : inère l'element à l'intérieur de la balise mais à la fin
// afterend: insère le parag après l'element reference



