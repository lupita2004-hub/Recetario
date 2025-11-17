/* ===============================
   BUSCADOR DE RECETAS
================================= */

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});


/* ===============================
   SCROLL REVEAL SUAVE
================================= */

ScrollReveal().reveal('.card', {
  duration: 800,
  distance: '30px',
  origin: 'bottom',
  interval: 120,
  reset: false
});

ScrollReveal().reveal('.title-section', {
  duration: 800,
  distance: '40px',
  origin: 'left'
});