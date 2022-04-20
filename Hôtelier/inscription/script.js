//Script formulaires
let userName = document.getElementById("userName");
let userFirstname = document.getElementById("userFirstname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
let error = document.getElementById("error");

let emailregex = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/;

userName.addEventListener("input", (event) => {
  if (event.target.value.length < 2) {
    error.innerText = "le nom doit contenir au moins 2-50 caractères";
  } else {
    error.innerText = "";
  }
});
userFirstname.addEventListener("input", (event) => {
  if (event.target.value.length < 2) {
    error.innerText = "le prénom doit contenir au moins 2-50 caractères";
  } else {
    error.innerText = "";
  }
});

email.addEventListener("input", (event) => {
  if (!regexEmail.test(event.target.value)) {
    error.innerText = "Le format de l'email est incorrect";
  } else {
    error.innerText = "";
  }
});

password.addEventListener("input", (event) => {
  if (event.target.value.length < 8) {
    error.innerText = "le mot de passe doit contenir au moins 8-20 caractères";
  } else {
    error.innerText = "";
  }
});

form.addEventListener("submit", (event) => {
  if (error.innerText !== "") {
    event.preventDefault();
    alert("Le formulaire contient des erreurs et n'a pas été envoyé");
  }
});
