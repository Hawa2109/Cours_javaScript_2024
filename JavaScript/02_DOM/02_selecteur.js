// alert("Hello !");
// Selectionner un élément par son ID
//  ---------- 1ére methode -------------------------
// let select1 = titreNiveau1;
// console.log(select1);

//  ---------- 2éme methode --------- // getElementById() sselection via l'id
// let select2;
let select2 = document.getElementById("titreNiveau1");
//  document.getElementById("titreNiveau1");
console.log(select2);

// console.log(document.getElementById("titreNiveau1"));


console.log(select2.textContent);


// Selectionner les éléments par leur CLASS

let selectClass = document.getElementsByClassName("selectClass");
// Lorsqu'on selectionne plusieurs éléments en même temps avec "getElementsByClassName", on créé un array (tableau) en JS qui affichera dans la console  avec l'intitulé "HTMLCollection".
//  Et comme un tableau le premier élément aura l'index 0, et grâce à cette index, je pourrai viser un seul de ces éléments.

// On va aller plus loin, en ciblant ce qui se trouve dans l'élément (le contenu de l'élément)
console.log(selectClass);
console.log(selectClass[0].innerHTML);
// innerHTML permet de définir le contenu de la balise ou l'élément HTML et le selectionner dans le but de l'identifier, modifier ou  le manipuler autrement.

// console.log(selectClass[0].textContent);

console.log(selectClass[1].innerHTML);
// console.log(selectClass[1].textContent);
  

//   Mini exo : modifier le contenu du h2 qui a la class "aChanger" : 'Je change le titre, youhou ! '

let aChnger = document.getElementsByClassName("aChanger");
console.log(aChnger);

aChnger[0].innerHTML = "Je change le titre, youhou ! ";

// Selectionner les éléments par le nom de balise

let lesP = document.getElementsByTagName("p");   // On cherche tous les paragraphes de notre page et on les récupernt dans un tableau (array) via la methode "getElementsByTagName("p")
console.log(lesP);

lesP[0].style.backgroundColor = "pink";








