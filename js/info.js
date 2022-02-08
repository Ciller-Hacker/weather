  const body = document.querySelector('.h1')
  const elHar = document.querySelector('.harorat')
  const elSham = document.querySelector('.shamol')
  const elBosim = document.querySelector('.bosim')
  const elHavo = document.querySelector('.havo')
  const elBulut = document.querySelector('.bulut')
  const elKun = document.querySelector('.container')


let elLet = localStorage.getItem('lat')
let elLon = localStorage.getItem('lon')
  
  fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${elLet}&lon=${elLon}&appid=655af4bc6e63602e3711d761a5b7ec5a`
        )
        .then((res) => res.json())
        .then((data) => {
          
          console.log(data);
          body.textContent = data.name + ' ' + 'City'
          elHar.textContent = Math.ceil(data.main.temp - 273.15) + ' ' + 'C' 
          elSham.textContent = data.wind.speed
          elBosim.textContent = data.main.pressure
          data.weather.forEach(element => {
            elHavo.textContent = element.main
            });
            elBulut.textContent = data.clouds.all
            if(data.clouds.all > 40 && data.clouds.all <80 ){
              elKun.classList.add('bulutli')
            }else if(data.clouds.all >= 80){
              elKun.classList.add('yomgir')
            }else if (data.clouds.all<=40) {
              elKun.classList.add('quyosh')
            }

        })






        // fetch(
        //   `http://api.openweathermap.org/data/2.5/weather?lat=${elLet}&lon=${elLon}&appid=655af4bc6e63602e3711d761a5b7ec5a`
        //   )
        //   .then((res) => res.json())
        //   .then((data) => {
            
        //     console.log(data);
        //     body.textContent = data.name + ' ' + 'City'
        //     elHar.textContent = Math.ceil(data.main.temp - 273.15) + ' ' + 'C' 
        //     elSham.textContent = data.wind.speed
        //     elBosim.textContent = data.main.pressure
        //     data.weather.forEach(element => {
        //       elHavo.textContent = element.main
        //       });
        //       elBulut.textContent = data.clouds.all
        //   })