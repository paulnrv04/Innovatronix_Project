document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("scheduleVisitModal");
  const openBtn = document.getElementById("openVisitModal");
  const closeBtn = document.getElementById("closeVisitModal");

  function openModal() {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  // open
  if (openBtn) openBtn.addEventListener("click", openModal);

  // close button
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // click outside dialog closes modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});