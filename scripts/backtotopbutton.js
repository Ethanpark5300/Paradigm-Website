// const showOnPx = 100;
// const backToTopButton = document.querySelector(".back-to-top")

// const scrollContainer = () => {
//   return document.documentElement || document.body;
// };

// document.addEventListener("scroll", () => {
//   if (scrollContainer().scrollTop > showOnPx) {
//     backToTopButton.classList.remove("hidden")
//   } else {
//     backToTopButton.classList.add("hidden")
//   }
// })

// const goToTop = () => {

//   document.body.scrollIntoView({
//     behavior: "smooth",
//   });
// };

// backToTopButton.addEventListener("click", goToTop)

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the back to top button based on scroll position
window.onscroll = function () {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};