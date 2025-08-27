let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let index = 0;

// Create dots
slides.forEach((_, i) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        index = i;
        updateSlides();
    });
    dotsContainer.appendChild(dot);
});
let dots = document.querySelectorAll(".dot");

function updateSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            dots[i].classList.add("active");
        }
    });
}

function autoSlide() {
    index = (index + 1) % slides.length;
    updateSlides();
}

setInterval
