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
