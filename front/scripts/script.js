document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-btn");

    button.addEventListener("click", function () {
      item.classList.toggle("active");
    });
  });
});
