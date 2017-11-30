import "./index.scss";
require("bootstrap");

window.$ = window.jQuery = require("jquery");
window.Popper = require("popper.js");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const menuItems = Array.prototype.slice.call(
  document.querySelectorAll(".menu a")
);
menuItems.push(menuBtn);

menuItems.forEach((el, index) => {
  el.addEventListener("click", () => {
    console.log(el, index);
    menuBtn.classList.toggle("menu__button--opened");
    navMenu.classList.toggle("menu--opened");
  });
});

window.addEventListener("keydown", e => {
  if (e.keyCode == 27) {
    if (navMenu.classList.contains("menu--opened")) {
      navMenu.classList.remove("menu--opened");
    }
    if (menuBtn.classList.contains("menu__button--opened")) {
      menuBtn.classList.remove("menu__button--opened");
    }
  }
});
