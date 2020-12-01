const watchInputs = () => {
    const wholeForms = document.querySelectorAll('form');
    const getAllForms = (form) => {
        const elementsForm = [...form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
            item.type !=="button";
        });
    
        return elementsForm;
    };

    wholeForms.forEach((form)=>{
        getAllForms(form).forEach((item)=> {
            item.addEventListener('input', (event)=>{
                const {target} = event;
                if(target.type === 'tel'){
                    target.value = target.value.replace(/[^\+\d]/g,'');
                }
                if(target.name === 'name'){
                    target.value = target.value.replace(/[^\sА-Яа-я]/g,'');
                }
            });
        });
    });



};

export default watchInputs;