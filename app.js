// smooth scroll to the section on Navigation click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// navigation animation

const menu = document.querySelector(".menu");
const overlay = document.getElementById("overlay");

menu.addEventListener('click', () => {  
  menu.classList.toggle('active');
  overlay.classList.toggle('open');
});

