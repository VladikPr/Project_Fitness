const slider = () => {
    const galerySlider = document.querySelector('.gallery-slider');
    const slides = galerySlider.querySelectorAll('.slide');
    let slideIndex = 0,
        timer;

    (function() {
        const dots = galerySlider.querySelector('.slider-dots');
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if(index === 0){
                dot.classList.add('active-dot');
            }
            dots.appendChild(dot);
            
        });
    })();

    const dot = galerySlider.querySelectorAll('.slider-dots .dot');
    slides[0].style.display = "block";

    const prevSlide = (element, index, dot) => {
        element[index].style.display = "none";
        dot[index].classList.remove('active-dot'); 
    };

    const nextSlide = (element, index, dot) => {
        element[index].style.display = "block"; 
        dot[index].classList.add('active-dot'); 
    };
    
    const autoSwitch = () =>{
        prevSlide(slides, slideIndex, dot);
        
        slideIndex++;
        if(slideIndex >= slides.length){
            slideIndex = 0;
        }
        nextSlide(slides, slideIndex, dot);
    };

    const playSlider = (time=2500) => {
        timer = setInterval(autoSwitch, time);
    };
    
    galerySlider.addEventListener('click', e => {
        const {target} = e;

        if(!target.closest('.slider-arrow, .slider-dots')){
            return;
        }

        prevSlide(slides, slideIndex, dot);

        if(target.closest('.prev')){
            slideIndex--;
        }else if(target.closest('.next')){
            slideIndex++;
        } else if(target.matches('.dot')){
            dot.forEach((element,index)=>{
                if(element === target){
                    slideIndex = index;
                }
            });
        }

        if(slideIndex >= slides.length){
            slideIndex = 0;
        }

        if(slideIndex < 0){
            slideIndex = slides.length -1;
        }

        nextSlide(slides, slideIndex, dot);
    });

    
    const stopSlide = () => {
        clearInterval(timer);
    };


    galerySlider.addEventListener('mouseover', (event)=> {
        const {target} = event;
        if(target.closest('.slider-dots, .slider-arrow')){
            stopSlide();
        }
    });

    galerySlider.addEventListener('mouseout', (event)=> {
        const {target} = event;
        if(target.closest('.slider-dots') || target.closest('.slider-arrow')){
            playSlider();
        }
    });

    playSlider(2500);


};

export default slider;