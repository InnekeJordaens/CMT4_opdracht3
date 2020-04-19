//menu
let menuknop = document.querySelector(".menu");
let nav = document.querySelector("nav");
let hideNav = document.querySelector(".hideNav");

function hideMenu() {
  nav.setAttribute("class", "onzichtbaar");
}

function showMenu() {
  nav.removeAttribute("class", "onzichtbaar");
}

menuknop.addEventListener("click", showMenu);
hideNav.addEventListener("click", hideMenu);

//filterbuttons
let filter = document.querySelector(".filter");
let buttons = document.querySelector(".buttons");
let hide = document.querySelector(".hideButtons");

function hideButtons() {
  buttons.setAttribute("class", "onzichtbaar");
}

function showButtons() {
  buttons.removeAttribute("class", "onzichtbaar");
}

filter.addEventListener("click", showButtons);
hide.addEventListener("click", hideButtons);



//eerst pagina volledig laden voor isotope anders worden afbeeldingen op elkaar gestapeld
let body = document.querySelector("body");
body.onload = function(){

//isotope
var iso = new Isotope(".overview", {
  itemSelector: ".element-item",
  layoutMode: "vertical"
});
  var filterbuttons = document.querySelectorAll(".filterbutton");

  for (var i = 0; i < filterbuttons.length; i++) {
    filterbuttons[i].addEventListener("click", filter);
  };


  function filter() {
    var filtervalue = event.target.getAttribute("data-filter");
    console.log(filtervalue);
    iso.arrange({filter: filtervalue });
  };
}
