const togglePopUp = () => {

    const targetModal = (modalTrigger, modalSelector, modalClose, index) => {
        const trigger = document.querySelectorAll(modalTrigger)[index],
            modal = document.getElementById(modalSelector);
        
        if(trigger){
            trigger.addEventListener('click', (e) => {
                const {target} = e;
                if(target) {
                    e.preventDefault();
                }
                if(modalTrigger === '.fixed-gift'){
                    document.body.firstElementChild.remove();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        }
        
        if(modal){
            modal.addEventListener('click', (e) => {
                const {target} = e;
                if(target.matches(`${modalClose}, .overlay, .close-btn`)) {
                    modal.style.display = "none";
                }
            });
        }
            

        
    };
    
    targetModal('.open-popup','free_visit_form', '.close_icon', 0);
    targetModal('.callback-btn','callback_form', '.close_icon', 0);
    targetModal('.fixed-gift','gift', '.close_icon', 0);
    targetModal(null,'thanks','.close_icon', 0);
};

export default togglePopUp;