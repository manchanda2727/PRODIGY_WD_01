// JavaScript to handle scroll and hover effects
const navbar = document.getElementById('navbar');

// Add class when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
