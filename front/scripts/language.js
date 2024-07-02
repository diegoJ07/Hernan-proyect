function toggleLanguage() {
  const elements = document.querySelectorAll("[data-en], [data-es]");
  const btn = document.getElementById("toggle-language");
  elements.forEach((el) => {
    if (btn.innerText === "Español") {
      el.innerText = el.getAttribute("data-es");
    } else {
      el.innerText = el.getAttribute("data-en");
    }
  });
  btn.innerText = btn.innerText === "Español" ? "English" : "Español";
}
