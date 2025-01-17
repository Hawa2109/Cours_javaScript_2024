// alert("Hello !");
// ******************* on récupére les éléments essentiels *********************

// On récupére notre formulaire
let myForm = document.querySelector("form");
// console.log(myForm);

// on récupére le pseudo
let inputPseudo = document.querySelector("#pseudo");
// console.log(inputPseudo);

// on récupére le mail
let inputEmail = document.querySelector("#email");
// console.log(inputEmail);

// on récupére le mot de passe
let inputPassWord = document.querySelector("#passWord");
// console.log(inputPassWord);

// ****************************************************************************

// on ajout l'écouteur d'événement
myForm.addEventListener("submit", function(event){
event.preventDefault();

// autre maniére pour récupéré la valeur d'un champ
// console.log(event.target[0].value);


// pour récupéré les valeurs de mes champs et on ajout un trim() pour éviter les espaces
let valuePseudo = inputPseudo.value.trim();
// console.log(valuePseudo);
// Pour connaitre la taille de la valeur  du champ pseudo
let lengthPseudo = valuePseudo.length;
// console.log(lengthPseudo);

let valueEmail = inputEmail.value.trim();
// console.log(valueEmail);
let valuePassWord = inputPassWord.value.trim();
// console.log(valuePassWord);

let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}a$/;
// let regexMdp = /^(?=.*[a-z])(?=.*[a-z])(?=.\d)(?=.*[#$^+=!*()@%&].{8,10})$/;
let regexMdp =/^(?=.*[a-z])(?=.*[A-Z])(?=.\d)(?=.*[#$^+=!*()@%&].{8,10})$/;

// ******************** Pseudo ********************* 
if (lengthPseudo < 5 || lengthPseudo > 15 ) {
    document.querySelector("#pseudoError").classList.add("error");
    document.querySelector("#pseudoError").classList.remove("d-none");
    document.querySelector(".iconePseudo").classList.remove("d-none");
    document.querySelector(".iconePseudo").style.color = "red"; 
} else {
    document.querySelector("#pseudoError").classList.add("d-none");
    document.querySelector(".iconePseudo").classList.remove("d-none");
    document.querySelector(".iconePseudo").classList.replace("bi-x", "bi-check");
    document.querySelector(".iconePseudo").style.color = "green"; 

}
// ****************** email ************************ 
if (!regexMail.test(valueEmail)) {
    document.querySelector("#emailError").classList.add("error");
    document.querySelector("#emailError").classList.remove("d-none");
    document.querySelector(".iconeEmail").classList.remove("d-none");
    document.querySelector(".iconeEmail").style.color = "red"; 
}else {
    document.querySelector("#emailError").classList.add("d-none");
    document.querySelector(".iconeEmail").classList.remove("d-none");
    document.querySelector(".iconeEmail").classList.replace("bi-x", "bi-check");
    document.querySelector(".iconeEmail").style.color = "green"; 
}
// ****************** PassWord ************************ 
if (!regexMdp.test(valuePassWord)) {
    document.querySelector("#passWordError").classList.add("error");
    document.querySelector("#passWordError").classList.remove("d-none");       
}
});
// ***************************** *********************
let show = document.querySelector("#show");
show.addEventListener("click", ()=>{
    if (inputPassWord.type == "password") {
        inputPassWord.type = "text";
        show.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }else {
        inputPassWord.type = "password";
        show.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    }
})









