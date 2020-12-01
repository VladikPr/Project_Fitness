const watchInputs = () => {
    const wholeForms = document.querySelectorAll('form');
    const getAllForms = (form) => {
        const elementsForm = [...form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
            item.type !=="button";
        });
    
        return elementsForm;
    };

    
        const maskPhone = (event, element) => {
            const keyCode = event.keyCode;
            const template = '+7 (___) ___-__-__',
                def = template.replace(/\D/g, ""),
                val = element.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, element.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(element.value) || element.value.length < 5 || keyCode > 47 && keyCode < 58) {
                element.value = newValue;
            }
        };

    wholeForms.forEach((form)=>{
        getAllForms(form).forEach((item)=> {
            item.addEventListener('input', (event)=>{
                const {target} = event;
                if(target.type === 'tel'){
                    maskPhone(event, item);
                    //target.value = target.value.replace(/[^\+\d]/g,'');
                }
                if(target.name === 'name'){
                    target.value = target.value.replace(/[^\sА-Яа-я]/g,'');
                }
            });
        });
    });

};

export default watchInputs;