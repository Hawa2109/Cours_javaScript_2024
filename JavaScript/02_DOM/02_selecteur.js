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


// Mini Exo : Selectionner le premier paragraphe et lui donner le style suivant :
// border-raduis (20px), color (#fff), padding (10px)

lesP[0].style.borderRadius = "20px ";
lesP[0].style.color = "#fff ";
lesP[0].style.padding = "10px ";


// Je selectioone tous les paragraphes dans la page et je change le texte en majuscule

// let lesP = document.getElementsByTagName("p");


// ------------- 1iére façon --------------------

// for(let i = 0; i < lesP.length; i++) {
//     lesP[i].style.textTransform = "uppercase";
// }

// ------------- 2éme façon --------------------

for(let p of lesP) {
    p.style.textTransform = "uppercase";
}


// Method querySelector() 

 let div = document.querySelector("div");
 console.log(div);
//   La methode querySelector recupére le premier élément trouvé spécifier en paramétre 
// l'avantage de querySelector est qu'il utilise la même syntaxe de selection en CSS
//  document.querySelector("#monId"), document.querySelector(".maClass"), document.querySelector("maBalise")

 div.style.border = "3px solid red";

// Method querySelectorAll()

// Selectionne toute les balises "div" et retourne un tableau (array) d'éléments

let queryPara = document.querySelectorAll(".selectClass");
// On a deux paragraphe qui on la class "selectClass" 
console.log(queryPara);
console.log(queryPara[1].innerHTML); // pour récuperer le contenu du deuxiéme élément

let rajout = document.querySelector("div.col-4 > p.selectClass");
console.log(rajout);
// console.log(rajout.innerHTML);
// console.log(rajout.textContent);



rajout.innerHTML = "<span> je suis là </span>"; 
//  Avec la propriété "innerHTM" on peut inclure les balises HTML, permet aussi d'insérer du html dynamique, mais peut poser des risque de sécurité si des données non sécurisées sont insérées (risque d'attaque XSS).

// rajout.textContent= "<span> je suis là </span>";
// "textContent" Permet de lire ou de modifier le contenu texte d'un élément. Il ignore et échappe les balises HTML

//  Creation d'un nouvel élément HTML

let section = document.querySelector("section");
console.log(section);
//  pour créer un élément nous utilisons la methode "CreateElement()", puis nous l'intégrons dans le noeud souhaité.
let nouveauParaFin = document.createElement("p");
console.log(nouveauParaFin);
nouveauParaFin.innerText = "Coucou, je suis ton nouveau paragraphe à la fin de la section";
section.append(nouveauParaFin);  // append() -> c'est pour insérer du contenu à la fin de la section  // append() accepte tous les éléments (balises ou string)
section.append(nouveauParaFin, "<span> Voici du texte supplémentaire </span>");

//  appendChild() : cette méthode ajoute un élément  HTML enfant à la fin d'un élément parent // n'accepte que les éléments de type balise.

//  Création d'un nouvel élément HTML au début de la section

let nouveauParaDebut = document.createElement("p");
nouveauParaDebut.innerText = "Coucou, je suis ton paragraphe au début de la section";
section.prepend(nouveauParaDebut);  // prepend() insérer l'élément et son contenu au début de la section 

//  Pour déplacer un élément 
/*
-> le parent
-> l'élément à déplacer
->l'élément qui vient aprés

*/

//  Le parent
 let parent = document.querySelector("main");
//  l'élément qui vient aprés
let soustitre = document.querySelector("h2");
//  l'élément à déplacer
let toMove = document.querySelector("h4");

parent.insertBefore(toMove, soustitre);

// -------------- Supprimer un élément ----------------------------------
        // pour supprimer un élément il nous faut deux paramétres
    //  -> le parent
    //  -> l'élément à supprimer:
//  Le parent
let liste = document.querySelector("ul");
console.log(liste);

// l'élément à supprimer
let li = document.querySelectorAll("li");
console.log(li);
// Pour supprimer on utilise la removeChild()
liste.removeChild(li[1]);

// Créer un attribut et sa valeur
//  la methode setAttribute() -> pour ajouter un nouvel attribut ou changer la valeur d'un attribut exixtant pour un élément

let lien1 = document.querySelector("a");
lien1.setAttribute("class", "link-underline-danger text-warning bg-primary bg-opacity-50");
// Rajout un attribut et sa valeur 

lien1.setAttribute("href", "01_introduction.html");  // Changer la valeur de l'attribut 
console.log(lien1);

// -----------------------------------------------------------
let lesA = document.querySelectorAll("a");
console.log(lesA);

//  Ici pour récupérer l'attribut du troisiéme "a" dans la liste ul, il faut indiquer l'index 1 car li[1] est supprimer du DOM
let valeurA2 = lesA[1].getAttribute("href");
console.log(valeurA2);

// ------------------------------------------
    // -------Exercice
// ------- Grace à votre script, créer une balise "a" dans "h1" avec le lien vers la documentation JS, qui s'affiche sur un nouvel onglet.

// Ce lien sera de couleur orange et non souligné

// ------------     ---------------

let titre = document.getElementById("titreNiveau1");

// créer une balise "a"
let nouveauA = document.createElement("a");

//  le lien vers la documentation JS
nouveauA.innerText = "lien vers Bootstrap";
nouveauA.setAttribute("href", "https://getbootstrap.com/docs/5.3/getting-started/introduction/");
//  Pour le mettre dans la balise h1
titre.appendChild(nouveauA);

//  s'affiche sur un nouvel onglet
nouveauA.target = "_blank";
//  lien sera de couleur orange et non souligné.
nouveauA.style.color = "orange";
nouveauA.style.textDecoration = "none";

/*
        Sélection de la balise h1
        let h1 = document.getElementById("titreNiveau1");
        Création de l'élément <a>
        let lien = document.createElement("a");
        Configuration du texte du lien
        lien.textContent = "Documentation JavaScript";
        Configuration de l'URL du lien (1ère façon)
         lien.setAttribute("href", "https://developer.mozilla.org/fr/");
        // Configuration de l'URL du lien (2ème façon)
        lien.href = "https://developer.mozilla.org/fr/";
        // Configuration pour ouvrir le lien dans un nouvel onglet (1ère façon)
        // lien.setAttribute("target", "_blank");
        // Configuration pour ouvrir le lien dans un nouvel onglet (2ème façon)
        lien.target = "_blank";
        // Application des styles pour que le lien soit vert et non souligné
        lien.style.color = "green";
        lien.style.textDecoration = "none";

        // Ajout du lien à l'intérieur de la balise h1
        h1.appendChild(lien);
*/




















 






 









