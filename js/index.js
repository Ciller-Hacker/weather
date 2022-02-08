const elUzb = document.querySelector('.js-btn')
const elWrapper = document.querySelector('.js-wrapper')
const elCity = document.querySelector('.js-cutyes')
const elInput = document.querySelector('.js-input')


function handleSubmitBtn(hods){
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${hods.target.textContent}&limit=1&appid=655af4bc6e63602e3711d761a5b7ec5a`
        )
        .then((res) => res.json())  
        // console.log(hods.target.dataset.let);
        localStorage.setItem('lat',hods.target.dataset.let)
        localStorage.setItem('lon',hods.target.dataset.lon)
        window.location = '/info.html'
    }
    elWrapper.addEventListener('click', handleSubmitBtn);



    function inputs(evt){

        elCity.addEventListener('click', (mol) => {
            mol.preventDefault();

            fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${elInput.value}&limit=1&appid=655af4bc6e63602e3711d761a5b7ec5a`
            )
            .then((res) => res.json())  
            .then((data) => {
             data.forEach(element => {
                 

            localStorage.setItem('lat',element.lat);
            localStorage.setItem('lon',element.lon);
                console.log(element.lat ); 
                console.log(element.lon);
                window.location = '/info.html'
            })
           } )
            // console.log(res.json());
        })

    }

    elInput.addEventListener('click', inputs);


