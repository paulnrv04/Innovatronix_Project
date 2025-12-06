const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const icon = hamburger.querySelector("i");
const ref = carousel();
const darkMode = darkModeToggle();

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close menu when clicking links
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

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

function darkModeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // optional: remember choice
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}