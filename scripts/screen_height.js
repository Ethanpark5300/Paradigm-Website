// Use JavaScript to get the viewport height
const screenHeight = window.innerHeight || document.documentElement.clientHeight;

// Create a style element and set a CSS variable with the viewport height
const style = document.createElement('style');
style.textContent = `:root { --screen-height: ${screenHeight}px; }`;

// Append the style element to the document head
document.head.appendChild(style);