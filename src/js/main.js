/**
   * Preloader
   */
let preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove()
  });
}

// Responsive Navbar

const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => nav.classList.toggle("active"))