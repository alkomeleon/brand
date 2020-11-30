"use strict"
let form = document.querySelector("form.feedback");
let name = document.getElementById("name");
let tel = document.getElementById("tel");
let email = document.getElementById("email");
let text = document.getElementsByTagName("textarea")[0];
let formOK = true;
let regexpName = /^[a-z]{2,}$/i;
let regexpTel = /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
let regexpEmail = /^[a-z0-9]+(\.|-)?[a-z0-9]+@[a-z0-9]+\.[a-z]{2,6}$/i;
console.log(text);

form.addEventListener("submit", function (event) {
    console.log(regexpName.test(name.value), regexpTel.test(tel.value), regexpEmail.test(email.value));
    if (!regexpName.test(name.value)) {
        name.style.borderColor = "red";
        formOK = false;
    } else {
        name.style.borderColor = "black";
    }
    if (!regexpTel.test(tel.value)) {
        tel.style.borderColor = "red";
        formOK = false;
    } else {
        tel.style.borderColor = "black";
    }
    if (!regexpEmail.test(email.value)) {
        email.style.borderColor = "red";
        formOK = false;
    } else {
        email.style.borderColor = "black";
    }
    if (text.value === "") {
        text.style.borderColor = "red";
        formOK = false;
    } else {
        text.style.borderColor = "black";
    }
    if (!formOK) {
        alert("Пожалуйста, заполните все поля со звёздочкой");
        event.preventDefault();
    }
});