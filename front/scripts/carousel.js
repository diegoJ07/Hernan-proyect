document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".carousel-track .card");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  // Seguridad por si algo no existe
  if (!track || cards.length === 0 || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function getVisibleCount() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function getMaxIndex() {
    return cards.length - getVisibleCount();
  }

  function moveCarousel() {
    const targetCard = cards[currentIndex];
    const offset = targetCard.offsetLeft;
    track.style.transform = `translateX(-${offset}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
    moveCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
    moveCarousel();
  });

  window.addEventListener("resize", () => {
    currentIndex = 0;
    moveCarousel();
  });

  // Inicialización
  moveCarousel();
});
