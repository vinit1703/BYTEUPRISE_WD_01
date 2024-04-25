const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var moode = document.getElementsByClassName(".nightowl-daylight");
function toggleMode() {
    const body = document.querySelector("body");
    const icon = document.querySelector(".moon-icon");
    body.classList.toggle("nightowl-daylight");
    icon.classList.toggle("moon-icon");
}
