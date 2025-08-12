const toggleBtns = document.querySelectorAll(".faq-toggle");
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faq = btn.closest(".faq");
    faq.classList.toggle("active");
  });
});
