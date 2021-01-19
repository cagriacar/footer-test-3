document
  .getElementById("show")
  .addEventListener("click", function showDescription(e) {
    const p = document.getElementById("article");
    const angleDown = document.getElementById("angleDown");

    if (p.style.display === "none") {
      $(p).fadeIn();
      p.style.display = "block";
      angleDown.style.transform = "rotate(180deg)";
      angleDown.style.transition = "ease all 0.5s";
    } else {
      $(p).fadeOut();
      angleDown.style.transform = "rotate(0deg)";
      angleDown.style.transition = "ease all 0.5s";
      p.style.display = "none";
    }
  });
