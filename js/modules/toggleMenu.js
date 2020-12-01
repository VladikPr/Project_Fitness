const toggleMenu = () => {

    const menuButton = document.querySelector('.menu-button'),
        menu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.top-menu'),
        headMain = document.querySelector('.head-main');

    menuButton.addEventListener('click', (e) => {
        const {target} = e;
        if(target.matches('img')){
            menu.style.display = "flex";
        }
        
    });

    const goToSection = (event) => {
        event.preventDefault();
        const block = event.target.href.split(/#/)[1],
            elem = document.getElementById(block);
        elem.scrollIntoView({behavior: "smooth"});
    };

    menu.addEventListener('click', (e) => {
        const {target} = e;
        
        if(target.closest('.close-menu-btn')){
            menu.style.display = "none";
        }else if(target.matches('a')){
            goToSection(e);
            menu.style.display = "none";
        }
    });

    topMenu.addEventListener('click', (e) => {
        const {target} = e;
        if(target.closest('.scroll')){
            goToSection(e);
        }
    });

    document.addEventListener('scroll', () => {
        const watch = menuButton.getBoundingClientRect().top * (-1),
            minHeight = headMain.offsetHeight,
            scrollTop = document.documentElement.scrollTop;
        if(watch > 0){
            topMenu.style.position = "fixed";
        }else if(scrollTop < minHeight){
           topMenu.style.position = "static";
        }
    });
  
    
};

export default toggleMenu;