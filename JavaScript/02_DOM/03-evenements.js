/*
Un événement correspond à une action spécifique, comme par exemple le clic sur un bouton ou la frappe d'un clavier. Ainsi, la programmation événementielle consiste à réagir à ces événements et exécuter du code au moment où c'est événement ce produisent. 

Les événements vont nous permettre de déclencher une fonction, c'est à dire une séries d'instructions suite à une action de mon utilisateur.

Pour implémenter cela nous devons d'abord dire à javaScript de les écouter grâce à "eventListerner", littéralement un "écouteur d'événement", en français. Puis nous devons lier l'événement à un bloc de code.

Ecouter un événement avec addEventListener : 
addEventListener est une methode fournie par javaScript, qui peut être appelée directement depuis les éléments HTML. Cette méthode prend deux paramétres: 
-> le nom de l'événement, comme click, par exemple; 
-> une fonction

la fonction peut s'écrire de deux maniéres différentes : 
-> les fonction classiques avec le mot clé "function";
-> les fonctions fléchées.

syntaxe : 
selecteur.addEventListener("événement", "fonction");

étape 1 -> selectionner les éléments 
étape 2 -> créer les fonctions qui seront exécutés
etape 3 -> poser l'écouteur d'évément pour l'intéraction
 */

//  1- div #rouge
let divRouge = document.querySelector("#rouge"); // je selectionne ma div par son ID, ensuite lui rajouter un écouteur dévénement
// console.log(divRouge);

// divRouge.addEventListener("click", function(){
//     divRouge.style.backgroundColor = "gold";
//     divRouge.style.borderRadius = "50%";
//     divRouge.textContent = "GOLD";
// })

function fDivRouge() {
  divRouge.style.backgroundColor = "gold";
  divRouge.style.borderRadius = "50%";
  divRouge.style.cursor = "pointer";
  divRouge.textContent = "GOLD";
}
// l'action ici est : click
// le nom de la fonction ici : fDivRouge

divRouge.addEventListener("click", fDivRouge);

// 2-  #p1
//  on place la fonction javaScript qu'on veut éxécuter à l'intérieur de la balise ouvrante <p>

function fp1() {
  alert("l'élément est cliqué !");
}

// 3- div #orange
//  avec la fonction anonyme
let divOrange = document.querySelector("#orange");
divOrange.addEventListener("dblclick", function () {
  divOrange.style.backgroundColor = "brown";
  divOrange.style.borderRadius = "50%";
  divOrange.style.cursor = "pointer";
  divOrange.textContent = "BROWN";
});

// 4- div #info
//  avec la fonction anonyme
let divInfo = document.querySelector("#info");
divInfo.addEventListener("mouseover", function () {
  divInfo.style.backgroundColor = "pink";
  divInfo.style.borderRadius = "50%";
  divInfo.style.cursor = "pointer";
  divInfo.textContent = "PINK";
});

// 5- div #primary
//  avec la fonction anonyme
let divPrimary = document.querySelector("#primary");
divPrimary.addEventListener("mouseout" /* mouseleave */, function () {
  divPrimary.style.backgroundColor = "violet";
  divPrimary.style.borderRadius = "50%";
  divPrimary.style.cursor = "pointer";
  divPrimary.textContent = "VIOLET";
  //  Je peux intéragir sur un autre élément gâce à la même fonction
  document.querySelector("h1").style.color = "green";
});

// 6- div #success : click et reclick
let divChangeCouleur = document.querySelector("#success");
divChangeCouleur.addEventListener("click", () => {
  if (divChangeCouleur.classList.contains("vert")) {
    // je vérifie si la div contient la class "vert" dans la liste de classes
    //  si true
    divChangeCouleur.classList.remove("vert"); // je supprime la classe vert
    divChangeCouleur.classList.add("gold"); // je rajoute la class gold
    divChangeCouleur.textContent = "GOLD";
  } else {
    // sinon si false -> la div ne contient pas la classe vert => elle contient la classe gold
    divChangeCouleur.classList.add("vert"); // je rajoute la class vert
    divChangeCouleur.classList.remove("gold"); // je supprime la classe gold
    divChangeCouleur.style.cursor = "pointer";
    divChangeCouleur.textContent = "VERT";
  }
});

/* image chat */
let imageChat = document.querySelector("img");
imageChat.style.width = "300px";

let lesP = document.querySelectorAll(".toggle p");
// console.log(lesP);

// lesP[0].style.textDecoration = "underline";
// lesP[1].style.textDecoration = "underline";
// lesP[2].style.textDecoration = "underline";

for (let paragraphe of lesP) {
  paragraphe.style.textDecoration = "underline";
  paragraphe.style.color = "#ee3366";
  paragraphe.style.fontWeight = "bolder";
}

// for (let paragraphe of lesP) {
//   paragraphe.style.textDecoration = "underline";
//   paragraphe.style.color = "#ee3366";
//   paragraphe.style.fontWeight = "bolder";
// }

// ---------------------
lesP[0].addEventListener("click", ()=>{
  imageChat.classList.add("hide");
});

lesP[1].addEventListener("click", ()=>{
  imageChat.classList.remove("hide");
});

lesP[2].addEventListener("click", ()=>{
  imageChat.classList.toggle("hide");
});

// const ROUGE = document.getElementById("rouge");
// const ORANGE = document.getElementById("orange");
// const BLEU = document.querySelector("#bleu");
// const PRIMARY = document.querySelector("#primary");
// const SUCCESS = document.querySelector("#success");

// let colors = ["ROUGE", "ORANGE", "BLEU", "PRIMARY", "SUCCESS"];
// let colours = [ROUGE, ORANGE, BLEU, PRIMARY, SUCCESS];

// function colorsEvent(myColour, myColor) {
//   myColour.classList.toggle("cercle");
//   if (myColour.textContent === "GOLD") {
//     myColour.textContent = myColor;
//   } else {
//     myColour.textContent = "GOLD";
//   }
// }

// for (let i = 0; i < colours.length; i++) {
//   colours[i].addEventListener("click", () =>
//     colorsEvent(colours[i], colors[i])
//   );
// }

// -----------------------------------
// l'objet event (e) est un objet javascript, contient des informations sur l'action qui vient de se produire, avec de nombreuses propriétés et méthodes

// Définir le event en tant que paramétre de votre fonction est facultatif mais , parfois, il est utile que la fonction de gestionnaire connaisse l'évenement qui s'est produit

//  Il set possible d'annuler ce comportement par défaut en appelant la méthode "preventDefault()" sur l'objet "event"
document.querySelector("#interdit").addEventListener("click", (event) => {
  console.log("Continuer plutôt à lire le cours !!!");

  event.preventDefault(); // la méthode "preventDefault()" est particulierement utile pour éviter que la soumission d'un formulaire recharge la page. 

  // console.log(event);
});

// **************************************
  // ----------------------- Gestion du formulaire ----------------------------------
  let prenom = document.querySelector('#prenom');
  // console.log(prenom);
//  En JS, pour accéder à la valeur d'une zone de texte dans un formulaire, on utilise la propeiété "value"
  let submit = document.querySelector('#submit');
  submit.addEventListener('click', (event)=> {
    event.preventDefault(); 
    //  Je récupére la valeur de l'élément input prenom
    let prenomValue = prenom.value;
    console.log(prenomValue);
    
    // console.log(event.target);
  } );

// Autre façon 
// let form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
// // Ici l'élément 
//   e.preventDefault();
//   console.log(e);
  
// let prenomValue = prenom.value;
// console.log(prenomValue);
 
// });

//  Focus blur pour les formulaires 
// Focus 
prenom.addEventListener('focus', () => { // l'utilisateur click à l'intérieur du champ (input prenom)
console.log(prenom.style.width);
prenom.style.width = '100px';

console.log(prenom.style.width);
});
//  Blur
prenom.addEventListener('blur', () =>{ // L'utilisateur sort du champ (input prenom)
prenom.style.width= "500px";
});
// -1)  Method 
// Evennement "change"
//  L'évennement change est déclanché lorsqu'un changement de la valeur d'un élément html est réalisé par l'utilisateur 
// const HTML = document.querySelector('#html');
//  const LABEL_HTML = document.querySelector('#labelHtml');

// HTML.addEventListener('change', (event)=>{
// // console.log(event.target);
// console.log(HTML.checked);
// if (HTML.checked){
//   // document.querySelector('#labelHtml').style.color = "red";

//   //  ou l'appelé via la variable LABEL_HTML
//   LABEL_HTML.style.color="red";

//   // ou par l'id (non recommandé)
//   // labelHtml.style.color="red";

//   // console.log(event.target);
//   event.target.style.backgroundColor='red'; // ici on change le background_color de l'élément input 

//   // event.target.nexElementSibling.style.color='red'; // ici on change la couleur de l'élément "label"  à partir de l'élément input
  
// } else{
//   document.querySelector('#labelCss').style.color = "blue";
// }
// });
// // CSS EXO
// const CSS = document.querySelector('#css');
//  const LABEL_CSS = document.querySelector('#labelCss');

// CSS.addEventListener('change', (event)=>{
// // console.log(event.target);
// console.log(CSS.checked);
// if (CSS.checked){
//   document.querySelector('#labelCss').style.color = "pink";  
//   event.target.style.backgroundColor='green'; 
// } else{
//   document.querySelector('#labelCss').style.color = "blue";
// }
// });

//************************      */ EXO JS  *******************************

// const JS = document.querySelector('#js');
//  const LABEL_JS = document.querySelector('#labelJs');

// JS.addEventListener('change', (event)=>{
// // console.log(event.target);
// console.log(JS.checked);
// if (JS.checked){
//   document.querySelector('#labelJs').style.color = "yellow";
//   event.target.style.backgroundColor='pink'; 
  
// } else{
//   document.querySelector('#labelJs').style.color = "blue";
// }
// });

// -2)   Method
// -------- Avec une boucle --------------------
let checks = document.getElementsByName('Langage');
console.log(checks);
for (let button of checks){
button.addEventListener('change', (event)=> {
  //  je vérifie si la valeur du check de l'élément dans mon objet event => true si la case est cocher
  console.log(event.target.labels[0]);
  
  if (event.target.checked){
    event.target.labels[0].style.color='red';
  }else{
    event.target.labels[0].style.color='blue';  
  }
});
}

//  Exo pour les boutons radio
// let radio = document.getElementsByName("niveau");

// // Fonction pour réinitialiser les couleurs des labels
// function resetLabelColors() {
//     for (let btn of radio) {
//         btn.labels[0].style.color = ""; // Remettre la couleur par défaut
//     }
// }

// // Écouteurs d'événements pour chaque bouton radio
// for (let button of radio) {
//     button.addEventListener("change", (event) => {
//         resetLabelColors(); // Appeler la fonction de réinitialisation

//         if (button.checked) {
//             switch (event.target.value) {
//                 case "acquis":
//                     event.target.labels[0].style.color = "green";
//                     break;
//                 case "enCours":
//                     event.target.labels[0].style.color = "orange";
//                     break;
//                 default:
//                     event.target.labels[0].style.color = "red";
//                     break;
//             }
//         }
//     });
// }

// Exo pour le radio

let radio = document.getElementsByName('niveau');
console.log(radio);
for (let button of radio){
button.addEventListener('change', (event)=> {
  //  je vérifie si la valeur du check de l'élément dans mon objet event => true si la case est cocher
  console.log(event.target);
  // console.log(event.target.value);
  
  // if (button.checked){
    switch (button.value) {
      case "acquis":  
        event.target.labels[0].style.color="green"; 
      break;
      case "enCours":
        event.target.labels[0].style.color="orange"; 
      break;
      default:
        event.target.labels[0].style.color="red"; 
        break;
    }
  // }
});
}



