function goBack() {
    console.log("Hello")
    const referrer = document.cookie.replace(/(?:(?:^|.*;\s*)referrer\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (referrer === "page1") {
        window.location.href = "../index.html";
    } 
    else if (referrer === "page2") {
        window.location.href = "../pages/contact.html";
    }
    // else {
    //     // Default behavior if referrer is not recognized
    //     window.history.back();
    // }
}