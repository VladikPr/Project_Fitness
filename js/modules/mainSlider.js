const mainSlider = () => {
    let slide = 0;
    const showSlides = () => {
        const slides = document.querySelectorAll('.main-slider .slide');

        if (slide === slides.length - 1){
            slide = 0;
        }

        slides.forEach(slide => slide.style.display = "none");
        slides[slide].style.display = "flex";
        slide++;
    
        setTimeout(showSlides, 4200);
    };

    showSlides();
};

export default mainSlider;