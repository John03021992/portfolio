// Menu burger

document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector(".target-burger").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("toggled");
  });
});
