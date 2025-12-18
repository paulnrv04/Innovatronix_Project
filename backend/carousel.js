const car = carousel();

function carousel() {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;

  function update() {
    const width = document.querySelector(".carousel").offsetWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    update();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    update();
  });

  window.addEventListener("resize", update);

  setInterval(() => {
    index = (index + 1) % items.length;
    update();
  }, 3000);
}

// Show and Hide the Blog Comment
