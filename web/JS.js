const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
  });
}