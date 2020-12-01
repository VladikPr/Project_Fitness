const calculator = () => {
    const priceTotal = document.getElementById('price-total');
    const inputText = document.querySelector('.input-text input');
    // Get Data from another page
    const getData = (url, func, duration) => {
        return fetch(url)
        .then((response) =>{
            if(response.status !== 200){
                throw new Error('status is not 200');
            }
            return response.text();
        })
        .then((response) => {
            const DOMelement = document.createElement('div');
            DOMelement.innerHTML = response;
            const block = DOMelement.querySelector('.cards-types');
            func(block, duration);
        })
        .catch(error => console.log(error));
    };

    

    const calculatePrice = (information, duration) => {
        const prices = information.querySelectorAll('label');
        prices.forEach(price => {
            const long = parseInt(price.querySelector('.long').textContent);
            const cost = parseInt(price.querySelector('.cost').textContent);
            const solo = price.querySelector('.solo').textContent;

            if(solo === '- соло -' && +long === +duration){
                if(priceTotal){
                    if(inputText.value === 'ТЕЛО2019'){
                        priceTotal.textContent = (cost * 0.7).toFixed();
                    } else {
                        priceTotal.textContent = cost;
                    } 
                }
                  
            }
        });
    };

    getData('./mozaika.html', calculatePrice, 1);
    const subDuration = document.getElementById('card_order');

    const getValue = (selector) => {
        let value;
        selector.forEach(item => {
            if(item.checked){
                value = item.value;
            }
        });
        return value;
    };

    const checkClub = (club, duration) => {
        if(club === 'mozaika'){
            getData('./mozaika.html',calculatePrice, duration);
           
        } else if(club === 'schelkovo'){
            getData('./schelkovo.html',calculatePrice, duration);
        }else{
            priceTotal.textContent = 0;
        }
    };

    subDuration.addEventListener('change', (e) => {
        const {target} = e;
        const time = document.querySelectorAll('.time input');
        const clubs = document.querySelectorAll('#card_order input[name="club-name"]');

        let duration = getValue(time);
        let club = getValue(clubs);
        console.log(club);

        if(!target.closest('.time, .club')){
            return;
        }

        if(target.matches('input') && target.closest('.time')){
            duration = target.value;
        }

        if(target.matches('input') && target.closest('.club')){
            club = target.value;
        }

        checkClub(club,duration);
    });

    inputText.addEventListener('input', () => {
        let duration = getValue(time);
        let club = getValue(clubs);
        checkClub(club,duration);
    });
    
};

export default calculator;