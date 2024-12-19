/*
Un événement correspond à une action spécifique, comme par exemple le clic sur un bouton ou la frappe d'un clavier. Ainsi, la programmation événementielle consiste à réagir à ces événements et exécuter du code au moment où c'est événement ce produisent. 

Les événements vont nous permettre de déclencher une fonction, c'est à dire une séries d'instructions suite à une action de mon utilisateur.

Pour implémenter cela nous devons d'abord dire à javaScript de les écouter grâce à "eventListerner", littéralement un "écouteur d'événement", en français. Puis nous devons lier l'événement à un bloc de code.

Ecouter un événement avec addEventListener : 
addEventListener est une methode fournie par javaScript, qui peut eê^tre appelée directement depuis les éléments HTML. Cette méthode prend deux paramétres: 
-> le nom de l'événement, comme click, par exemple; 
-> une fonction

la fonction peut s'écrire de deux maniéres différentes : 
-> les fonction classiques avec le mot clé "function";
les fonctions fléchées.

syntaxe : 
selecteur.addEventListener("événement", "fonction");

étape 1 -> selectionner les éléments 
étape 2 -> créer les fonctions qui seront exécutés
etape 3 -> poser l'écouteur d'évément pour l'intéraction
 */

//  1- div #rouge
let divRouge = document.querySelector("#rouge");  // je selectionne ma div par son ID, ensuite lui rajouter un écouteur dévénement 
console.log(divRouge);

// divRouge.addEventListener("click", function(){
//     divRouge.style.backgroundColor = "gold";
//     divRouge.style.borderRadius = "50%";
//     divRouge.textContent = "GOLD";
// })



function fDivRouge(){
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.style.cursor = "pointer";
    divRouge.textContent = "GOLD";
}

divRouge.addEventListener("click", fDivRouge); 

// 2-  #p1
//  on place la fonction javaScript qu'on veut éxécuter à l'intérieur de la balise ouvrante <p>  

function fp1() {
    alert("l'élément est cliqué !");
}

// 3- div #orange 
//  avec la fonction anonyme 
let divOrange = document.querySelector("#orange");
divOrange.addEventListener("dblclick", function() {

    divOrange.style.backgroundColor = "brown";
    divOrange.style.borderRadius = "50%";
    divOrange.style.cursor = "pointer";
    divOrange.textContent = "BROWN";
});

// 4- div #info
//  avec la fonction anonyme 
let divInfo= document.querySelector("#info");
divInfo.addEventListener("mouseover", function() {

    divInfo.style.backgroundColor = "pink";
    divInfo.style.borderRadius = "50%";
    divInfo.style.cursor = "pointer";
    divInfo.textContent = "PINK";
});

// 4- div #primary
//  avec la fonction anonyme 
let divPrimary= document.querySelector("#primary");
divPrimary.addEventListener("mouseout" /* mouseleave */, function() {

    divPrimary.style.backgroundColor = "violet";
    divPrimary.style.borderRadius = "50%";
    divPrimary.style.cursor = "pointer";
    divPrimary.textContent = "VIOLET";
    //  Je peux intéragir sur un autre élément gâce à la même fonction
    document.querySelector("h1").style.color = "green";
});