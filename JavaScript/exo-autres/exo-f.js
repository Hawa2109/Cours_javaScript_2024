let button = document.querySelector("#toggle-rectangle");
let rectangle = document.querySelector(".rectangle");
function toggleButtonOnClick() {
    button.classList.toggle("hide");
}
function redColorButton() {
    button.classList.add("red");
}
function removeRedColorButton() {
    button.classList.remove("red");
}
function greenColorButton() {
    button.classList.add("green");
}

rectangle.addEventListener("dblclick", greenColorButton);
rectangle.addEventListener("click", toggleButtonOnClick);
button.addEventListener("mouseover", redColorButton);
button.addEventListener("mouseout", removeRedColorButton);