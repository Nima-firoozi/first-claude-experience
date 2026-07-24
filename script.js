const flipper = document.getElementById("flipper");
document
  .getElementById("toSignup")
  .addEventListener("click", () => flipper.classList.add("flipped"));
document
  .getElementById("toLogin")
  .addEventListener("click", () => flipper.classList.remove("flipped"));
