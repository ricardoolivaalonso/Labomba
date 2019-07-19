"use strict";

/*Variables*/
var profile = document.querySelector("#profile");
var profileTitle = document.querySelector("#profile__title");
var headerTrigger = document.querySelector("#header__trigger");
var menu = document.querySelector("#menu");
var hPro = 250;
/*Funciones*/

function myMenu(event) {
  menu.classList.toggle("is-show");
}

function myScroll(event) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (winScroll < hPro) {
    profile.classList.remove("header-shadow");
    profileTitle.classList.add("is-hide");
  }

  if (winScroll >= hPro) {
    profile.classList.add("header-shadow");
    profileTitle.classList.remove("is-hide");
  }
}

function main(event) {
  headerTrigger.addEventListener("click", myMenu);
}
/*Listeners*/


window.addEventListener("load", main);
window.addEventListener("scroll", myScroll);