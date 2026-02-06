const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Toggle menu when clicking hamburger
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sideMenu.classList.toggle("open");
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  menuBtn.classList.remove("active");
  overlay.classList.remove("show");
});

// Prevent clicks inside menu from closing it
sideMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close menu when clicking anywhere else
document.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});
const menuLinks = sideMenu.querySelectorAll("a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("open");
  });
});
