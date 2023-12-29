function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the back to top button based on scroll position
window.onscroll = function () {
    var backToTopBtn = document.getElementById("BackToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } 
    else {
        backToTopBtn.style.display = "none";
    }
};