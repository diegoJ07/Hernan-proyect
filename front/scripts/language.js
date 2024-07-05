document
  .querySelector("#toggle-language")
  .addEventListener("click", function () {
    const elements = document.querySelectorAll("[data-en], [data-es]");
    const isSpanish = this.innerText === "Español";

    elements.forEach((element) => {
      if (isSpanish) {
        element.innerHTML = element.getAttribute("data-es");
      } else {
        element.innerHTML = element.getAttribute("data-en");
      }
    });

    this.innerText = isSpanish ? "English" : "Español";
  });
