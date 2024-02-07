let navbar = document.querySelector("nav");
let navLinksEle = document.getElementsByClassName("navLinks");

function toggleMenu() {
  navLinksEle.classList.toggle("show-menu");
}

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = "#eefff9";
  } else {
    navbar.style.background = "transparent";
  }
};
