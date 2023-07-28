const buttons = document.querySelectorAll("[data-slide-btn]")


setInterval(() => {
    const offSet = 1
    switchSlides(offSet)
}, 5000);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offSet = button.dataset.slideBtn === "next" ? 1 : -1
        switchSlides(offSet)  
    })
})

function switchSlides(offSet){
    const slides = Array.from(document.querySelector("[data-slides]").children);
    const activeSlide = document.querySelector("[data-active]");
    const currentActiveSlideIndex = slides.indexOf(activeSlide);
    let nextActiveSlideIndex = currentActiveSlideIndex + offSet;
    if (nextActiveSlideIndex < 0) {
      nextActiveSlideIndex = slides.length - 1;
    } else if (nextActiveSlideIndex >= slides.length) {
      nextActiveSlideIndex = 0;
    }
    delete activeSlide.dataset.active;
    slides[nextActiveSlideIndex].dataset.active = true;
}