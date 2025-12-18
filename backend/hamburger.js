
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeToggle");

  // 1) Apply saved theme on load
  const saved = localStorage.getItem("theme"); // "dark" or "light"
  if (saved === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) themeBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    if (themeBtn) themeBtn.textContent = "🌙";
  }

  // 2) Toggle + save
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }
});

// Close menu when clicking links
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const icon = hamburger.querySelector("i");


hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});

