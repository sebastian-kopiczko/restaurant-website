import "./index.scss";
require("bootstrap");

window.$ = window.jQuery = require("jquery");
window.Popper = require("popper.js");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const menuItems = document.querySelectorAll(".menu a");
menuBtn.addEventListener(
  "click",
  () => {
    menuBtn.classList.toggle("menu__button--opened");
    navMenu.classList.toggle("menu--opened");
  },
  false
);

for (var menuItem of menuItems) {
  menuItem.addEventListener(
    "click",
    () => {
      menuBtn.classList.toggle("menu__button--opened");
      navMenu.classList.toggle("menu--opened");
    },
    false
  );
}

window.addEventListener("keydown", e => {
  if (e.keyCode == 27) {
    if (navMenu.classList.contains("menu--opened")) {
      navMenu.classList.remove("menu--opened");
    }
  }
});
