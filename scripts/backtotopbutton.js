window.onscroll = function () {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (window.pageYOffset > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
