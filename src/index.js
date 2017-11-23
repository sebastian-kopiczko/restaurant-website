import "./index.scss";
import img from "./assets/img/logo.png";
import bglanding from "./assets/img/bg-landing.png";
window.$ = window.jQuery = require("jquery");
window.Popper = require("popper.js");
require("bootstrap");

console.log("hello world!");

// use tooltip and popover components everywhere
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-btn--close");
  navMenu.classList.toggle("nav__menu--close");
});
