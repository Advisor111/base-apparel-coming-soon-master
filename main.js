var logo = document.getElementById("logo"),
    subs = document.getElementById("subs"),
    img2 = document.getElementById("g-img"),
    query = window.matchMedia("(min-width: 768px)"),
    container = document.querySelectorAll(".container"),
    section = document.querySelectorAll(".section");
document.addEventListener("DOMContentLoaded", init());

function init() {
    "use strict"
    if (query.matches) {
        subs.insertBefore(logo, subs.childNodes[0])
        img2.src = "images/hero-desktop.jpg";
        section[0].insertBefore(img2, section[0].childNodes[0])
    } else {} ;
};

var form = document.getElementById("form"),
    email = document.getElementById("email"),
    submit = document.getElementById("submit"),
    error_mass = document.getElementById("error-mass");

submit.onclick = function() {
    "use strict"
    if (email.value === ""){
        form.classList = "error" ;
        email.style.backgroundImage= "url(../images/icon-error.svg)";
        email.placeholder = "";
        error_mass.innerHTML = "Please provide a valid email";
    } else {
        form.classList.remove("error") ;
        email.style.backgroundImage= "none";
    }
};