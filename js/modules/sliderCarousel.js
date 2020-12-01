const sliderCarousel = () => {
    const slider = document.querySelector('.services-slider');
    const slides = document.querySelectorAll('.services-slider .slide');
    const allSlides = [];

    for(let i = 0; i < slides.length; i++){
        allSlides.push(slides[i]);
    }

    const getSlidesNum = () => {
        const windowWidth = document.documentElement.clientWidth;
        let numSlides;
        if (windowWidth > 820 && windowWidth <= 1200){
            numSlides = 4;
        }else if (windowWidth > 560 && windowWidth <= 820){
            numSlides = 3;
        }else if (windowWidth > 440 && windowWidth <= 560){
            numSlides = 2;
        }else if (windowWidth <= 440){
            numSlides = 1;
            slider.style.justifyContent = "center";
        }else{
            numSlides = 5;
        }
        return numSlides;
    };
    
    const defaultSlides = () => {
        allSlides.forEach((slide,index) => index<getSlidesNum()?slider.appendChild(slide):"");
    };

    // Remove all slides and diplay number of slides depending on window width
    slides.forEach(slide => slider.removeChild(slide));
    defaultSlides();
    
    // Next or previous slide
    const nextSlide = (elements) => {
        const slides = document.querySelectorAll('.services-slider .slide');
        slides.forEach(slide => slider.removeChild(slide));
        elements.forEach( i => slider.appendChild(i));
    };
    

    let i = 0;
   const switchSlides = (n, showSlides) =>{
        i+=n;
        let newArr;
        if (i >=0 && i < showSlides){
            newArr = allSlides.slice(i, showSlides + i);
            nextSlide(newArr);
        } else if(i >= showSlides){
            let x = 0;
            const delta = allSlides.length - (i+showSlides);
            if(delta < 0){
                x = delta * -1;
            }
            newArr = allSlides.slice(i, i + showSlides).concat(allSlides.slice(0,x));
            nextSlide(newArr);
            if(i === allSlides.length){
                i = 0;
            }
        }
        
        if (i < 0 && i > -showSlides){
            newArr = allSlides.slice(allSlides.length + i).concat(allSlides.slice(0, showSlides + i));
            nextSlide(newArr);
        } else if (i <= -showSlides){
            newArr = allSlides.slice(allSlides.length + i, allSlides.length + i + showSlides);
            nextSlide(newArr);
            if((allSlides.length + i) === 0){
                i = 0;
            }
        }
   };

    slider.addEventListener('click', (e) => {
        const {target} = e;
        const slidesNum = getSlidesNum();
        if(target.closest('.prev')){
            switchSlides(-1,slidesNum);
        }else if (target.closest('.next')){
            switchSlides(+1,slidesNum);
        }
    });
    
};

export default sliderCarousel;
