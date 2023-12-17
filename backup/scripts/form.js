document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function () {
            // Set a cookie with the current page as the referrer
            document.cookie = `referrer=${window.location.pathname}; expires=0; path=/`;
        });
    });
});