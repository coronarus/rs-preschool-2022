const icon = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
const blackout = document.querySelector('.blackout');

function addOpenClasstoMenu() {
  icon.classList.toggle('open');
  nav.classList.toggle('open');
  blackout.classList.toggle('open');
}

icon.addEventListener('click', addOpenClasstoMenu);
nav.addEventListener('click', addOpenClasstoMenu);

var image = document.getElementsByClassName('zero-block__hero-bg');
new simpleParallax(image);
