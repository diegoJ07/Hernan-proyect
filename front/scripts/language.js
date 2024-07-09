function toggleLanguage() {
  const elements = document.querySelectorAll("[data-en], [data-es]");
  const isSpanish =
    document.querySelector("#toggle-language").innerText === "Español";

  elements.forEach((element) => {
    if (isSpanish) {
      element.innerHTML = element.getAttribute("data-es");
    } else {
      element.innerHTML = element.getAttribute("data-en");
    }
  });

  document.querySelector("#toggle-language").innerText = isSpanish
    ? "English"
    : "Español";
}

document.querySelectorAll("nav ul li a").forEach((el) => {
  el.addEventListener("click", () => {
    document.getElementById("check").checked = false;
  });
});

document.querySelectorAll(".submenu li a").forEach((el) => {
  el.addEventListener("click", () => {
    document.getElementById("check").checked = false;
  });
});
