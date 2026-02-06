const reveal = document.querySelector(".reveal");
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

window.addEventListener("scroll", () => {
  const top = reveal.getBoundingClientRect().top;
  const height = window.innerHeight;

  if (top < height - 100) {
    reveal.classList.add("active");
  }
});
