const dropDown = () => {
    const headMain = document.querySelector('.header-main'),
        clubList = document.querySelector('.clubs-list ul');
    

    headMain.addEventListener('click', (e) => {
        const {target} = e;

        if (target.closest('.club-select') && !target.matches('ul, li')) {
            clubList.classList.toggle('deactivated');
        }

        if (target.matches('a') || !target.closest('.club-select')){
            clubList.classList.add('deactivated');
        }
    });

};

export default dropDown;