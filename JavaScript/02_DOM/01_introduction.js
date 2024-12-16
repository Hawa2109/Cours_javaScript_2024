// alert("coucou !"); 
/*
   ---------------------------- Objectif du cours -------------------------------
   1 => Comprendre ce qui est le DOM.
   2 => Manipuler le DOM avec javaScript pour créer, selectionner, modifier et supprimer des éléments.
   3 => Gérer de évenements utilisateurs sur les éléments du DOM.
    
    -------------------------------------------------
    1- Définition : 
    le DOM (Document Object Model) est une interface de programmation qui représente un document HTML ou XTML sous forme d'une arborescence d'objects. Chaque éléments HTML devient un noeud que l'on peut manipuler avec javaScript.

    Avec le DOM nous allons pouvoir intéragir avec les utilisateurs (afin de repérer des clics sur un élément ou encore de récupérer leur noms dans un formulaire... etc)

    Structure du DOM : 

     *************************************************************************
     <!DOCTYPE html>
    <html>
        <head>
        <title> Exemple DOM</title>
        </head>
        <body>
            <h1 id="titre">Hello, DOM !</h1>
            <p class="texte">Ceci est un paragraphe</p>
            <button id="btn">Cliquez sur moi</button>
        </body>
    </html>
     ************************************************************************

     La structure du DOM de ce document peut être représenter ainsi

     - document
        └─ html
            ├─ head
            │    └─ title
            └─ body
                ├─ h1 (id="titre")
                ├─ p (class="texte")
                └─ button (id="btn")
**********************************************************************
Il faut voir le DOM comme un arbre ou chaque élément peut avoir zéro ou plusieurs enfants, qui peuvent avoir eux même zéro ou plusieurs enfants...

Dans le DOM on commence toujours par un élément racine qui est le point de départ du document : la balise <html> 

En résumé : 
aujourd'hui les sites web sont de plus en plus intéractif et annimés. En effet, leur contenu change et évoluent en continu, sans avoir besoin de recharger la page. Cela permet d'avoir une navigation fluide et agréable.
* Eh bien c'est le DOM qui nous permet de faire cela.

* L'object "document" est le point d'entrée vers mon contenu HTML.
* Chaque page charge dans mon navigateur a un object "document".
* Ex : document.write(""); -> me permet d'afficher du contenu JS dans ma page HTML.

* "Window" est un object qui correspond à la fenêtre dans laquelle s'affiche ma page web.
 * Il  est le parent de chaque onject qui compose la page web, il contient donc : 
 -> L'object "document" : la page en elle même
 -> L'object "location" : le lieu de stockage de la page
 -> L'object "history" : les pages visitées précédement
    
*/

console.log(window);  // on retrouve plein de methodes disponible sur l'object "window "
// l'object "window" posséde des methodes relatives à l'ouverture et à la fermeture des fenêtres.

// -> Les methodes : alert(), confirm(), et promt()...
console.log(document);

// console.log(document.location);
// console.log(location);


console.log(window.document.title);

// l'évenement window.onload permet de lancer la fonction seulement une fois que toute la page est chargée ce qui fait que cette fonction, peut importe où elle est placée dans la page, sera lue seulement lorsque toute la page à été chargée

