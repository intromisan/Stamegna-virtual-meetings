// smooth scroll to the section on Navigation click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

// pop up window on first entrance of session. if user clicks X or "grey" area
// pop up window closes (decline cookies)

const popup = document.getElementById("popupCookies");
const btnClose = document.getElementById("close");
const pushPopup = () => {
  popup.style.display = 'block';
}

const checkFirstVisit = () => {
  if (sessionStorage.getItem("firstEntrance") !== "true"){
    sessionStorage.setItem("firstEntrance", "true");
    pushPopup();
  }
}

btnClose.addEventListener('click', () => {
  popup.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
