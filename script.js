// Simple Hero Slider

const heroSection = document.querySelector(".hero-section");

const images = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop"
];

let index = 0;

function changeBackground() {
  heroSection.style.backgroundImage = `url(${images[index]})`;

  index++;

  if (index >= images.length) {
    index = 0;
  }
}

setInterval(changeBackground, 3000);