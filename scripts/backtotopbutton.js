const navbarHeight = 90;

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx + navbarHeight) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = () => {
  scrollContainer().scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

backToTopButton.addEventListener("click", goToTop);
