const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Toggle the hamburger icon when clicked
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
});

const style = document.createElement('style');
style.innerHTML = `
    .hamburger.open .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .hamburger.open .bar:nth-child(2) {
        opacity: 0;
    }
    .hamburger.open .bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);
