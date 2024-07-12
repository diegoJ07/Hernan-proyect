<script>
  document.addEventListener("DOMContentLoaded", function() {
    function adjustSlogan() {
      var slogan = document.querySelector(".slogan-home h2 span");
      if (window.innerWidth <= 768) {
        slogan.innerHTML = "We build long term<br>relationships with our<br>clients and partners";
      } else {
        slogan.innerHTML = "We build long term relationships<br> with our clients and partners";
      }
    }

    adjustSlogan(); // Ajusta el contenido al cargar la página

    window.addEventListener("resize", function() {
      adjustSlogan(); // Ajusta el contenido cuando la ventana se redimensiona
    });
  });
</script>
