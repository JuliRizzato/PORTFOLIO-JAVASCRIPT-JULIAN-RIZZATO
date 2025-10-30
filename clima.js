const apiKey = '374b5b04384cfe05c7011fce86f6e6ba';

document.getElementById('buscar').addEventListener('click', async () => {
    const ciudad = document.getElementById('ciudad').value.trim();
    if (!ciudad) return alert ('Ingrese una ciudad');


    try{
        const res = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}` 
        );
        const data = await res.json();
        if (data.cod !== 200){
            document.getElementById('resultado').innerHTML = 'Ciudad no encotrada';
            return;
        }

        document.getElementById('resultado').innerHTML =
       `<h2>${data.name}, ${data.sys.country}</h2>
        <p>Temp: ${data.main.temp} ºC</p>    
        <p>Viento: ${data.wind.speed} km/h</p>    
        <p>Clima: ${data.weather[0].description}</p>
        <p>${data.weather[0].icon}</p> `; 
      
    }catch (error) {
        document.getElementById('resultado').innerHTML = 'Error al conectar con la API';
    }
});