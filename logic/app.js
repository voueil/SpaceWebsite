const title = document.querySelector(".title");
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 20;
  const y = (e.clientY - window.innerHeight / 2) / 20;

  title.style.transform = `
    rotateX(${y}deg)
    rotateY(${x}deg)
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".scroll-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach(card => observer.observe(card));
});
