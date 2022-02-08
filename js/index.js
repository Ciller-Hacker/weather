const elUzb = document.querySelector('.js-btn')
const elWrapper = document.querySelector('.js-wrapper')
const elCity = document.querySelector('.js-cutyes')
const elInput = document.querySelector('.js-input')


function handleSubmitBtn(hods) {
    fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${hods.target.textContent}&limit=1&appid=655af4bc6e63602e3711d761a5b7ec5a`
    )
        .then((res) => res.json())
    // console.log(hods.target.dataset.let);
    localStorage.setItem('lat', hods.target.dataset.let)
    localStorage.setItem('lon', hods.target.dataset.lon)
    window.location = '/info.html'
}
elWrapper.addEventListener('click', handleSubmitBtn);



function inputs(evt) {
    evt.preventDefault();
    elCity.innerHTML = null
    fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${elInput.value}&limit=5&appid=655af4bc6e63602e3711d761a5b7ec5a`
    )
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                let elButtons = document.createElement('button')
                elButtons.textContent = element.name
                elButtons.classList.add('list-group-item-action')
                elButtons.classList.add('border-0')
                elButtons.classList.add('w-100')
                elButtons.classList.add('px-3')
                elButtons.classList.add('py-2')
                
                elCity.append(elButtons)

                // py-2, px-3, border-0, w-100, 
                elButtons.addEventListener('click', () => {
                    localStorage.setItem('lat', element.lat);
                    localStorage.setItem('lon', element.lon);
                    console.log(element.lat);
                    console.log(element.lon);
                    window.location = '/info.html'
                })
            })
        })
}

elInput.addEventListener('input', inputs);


