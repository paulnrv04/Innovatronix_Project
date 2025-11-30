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

// Close menu when clicking links
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});
