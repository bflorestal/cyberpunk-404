/*--------------------Slide effect sur la barre de navigation--------------------*/

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  /* Fond transparent pour le menu burger sur mobile */

  var fondmobile = document.getElementById("darker-bg");

  burger.addEventListener("click", () => {
    /*Toggle nav*/
    nav.classList.toggle("nav-active");

    if (window.innerWidth <= 768) {
      if (document.querySelector(".nav-links").classList.length == 2) {
        fondmobile.classList.add("show-darker-bg");
      }
      if (document.querySelector(".nav-links").classList.length == 1) {
        fondmobile.classList.remove("show-darker-bg");
      }
    }

    /*Animation liens*/
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.6
        }s`;
      }
    });
    /*Animation menu burger*/
    burger.classList.toggle("toggle");
  });
};

navSlide();

/*--------------------Pour les 4 animations--------------------*/

var btnanimation1 = document.getElementsByClassName("btnanimation1");
var btnanimation2 = document.getElementsByClassName("btnanimation2");
/*var btnanimation3 = document.getElementsByClassName("btnanimation3");
var btnanimation4 = document.getElementsByClassName("btnanimation4");*/

var circleanimation = document.getElementById("circleanimation");
var rectangleanimation = document.getElementById("rectangleanimation");
var blackshade = document.getElementById("blackshade");

function closeanim() {
  blackshade.classList.remove("show");
  circleanimation.classList.remove("show");
  rectangleanimation.classList.remove("show2anim");
}

function opencircleanim() {
  blackshade.classList.add("show");
  circleanimation.classList.add("show");
}

function openrectangleanim() {
  blackshade.classList.add("show");
  rectangleanimation.classList.add("show2anim");
}
