'use strict';
const toTop = () => {
    const start = document.body;
    const arrow = document.getElementById('totop');
    const headSlider = document.querySelector('.head-slider');

    arrow.style.display = 'none';
    document.addEventListener('scroll', () => {
        const blockTopPosition = headSlider.getBoundingClientRect().top * (-1);
        const blockHeight = headSlider.offsetHeight;

        if(blockTopPosition > blockHeight){
            arrow.style.display = '';
        }else{
            arrow.style.display = 'none';
        }
    });

    arrow.addEventListener('click', (e) =>{
        const {target} = e;
        if(target){
            e.preventDefault();
            start.scrollIntoView({behavior: "smooth"});
        }
    });


};

export default toTop;