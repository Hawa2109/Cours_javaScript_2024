let button = document.getElementById("toggle-rectangle");
let rectangle = document.querySelector(".rectangle");
//  pour afficher le rectangle
button.addEventListener("click", () => {
  rectangle.classList.toggle("hidden");
});

// Changer la couleur en rouge quand la souris entre
rectangle.addEventListener("mouseenter", () => {
  rectangle.style.backgroundColor = "red";
});

// Revenir à la couleur originale quand la souris sort
rectangle.addEventListener("mouseleave", () => {
  rectangle.style.backgroundColor = "blue";
});

// Changer la couleur en vert sur un double-clic
rectangle.addEventListener("dblclick", () => {
  rectangle.style.backgroundColor = "green";
});

// ********************************** Exo 2 ***********************************
let buttoncercle = document.getElementById("toggle-cercle");
let cercle = document.querySelector(".cercle");

// pour afficher ou cacher le cercle
buttoncercle.addEventListener("click", function () {
  cercle.classList.toggle("hidden");
});

//  pour changer la couleur au survol 
cercle.addEventListener("mouseover", function () {
  cercle.style.backgroundColor = "orange";
});

// revenir à la couleur de départ grâce à  un double-clic
cercle.addEventListener("dblclick", () => {
  cercle.style.backgroundColor = "rgb(7, 72, 72)";
});