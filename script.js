// script.js
window.addEventListener('load', () => {
  document.querySelector('.preloader').classList.add('loaded');
  setTimeout(() => document.querySelector('.preloader').style.display = 'none', 600);
});

// NAV TOGGLE (mobile)
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});

// CUSTOM CURSOR ANIMATION
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

function animateCursor() {
  posX += (mouseX - posX) / 8;
  posY += (mouseY - posY) / 8;
  follower.style.left = posX + 'px';
  follower.style.top = posY + 'px';
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  requestAnimationFrame(animateCursor);
}

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
animateCursor();

// LINK HOVER INTERACTION
document.querySelectorAll('a, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    follower.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.transform = 'scale(1)';
  });
});
