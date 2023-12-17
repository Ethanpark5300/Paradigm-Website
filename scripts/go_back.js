function goBack() {
    // Read the referrer cookie
    const referrer = document.cookie.replace(/(?:(?:^|.*;\s*)referrer\s*=\s*([^;]*).*$)|^.*$/, "$1");

    // Redirect to the original page or default behavior if referrer is not recognized
    window.location.href = referrer || "../index.html";
}