function actualizarReloj(){
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const reloj = document.getElementById('reloj');
    reloj.innerHTML =  `${horas}:${minutos}:${segundos}`;


   // Cambiar color según la hora
    const h = ahora.getHours();

    if (h >= 6 && h < 12) {
        // Mañana
        reloj.style.color = 'orange';
    } else if (h >= 12 && h < 18) {
        // Tarde
        reloj.style.color = 'green';
    } else if (h >= 18 && h < 22) {
        // Atardecer
        reloj.style.color = 'goldenrod';
    } else {
        // Noche
        reloj.style.color = 'lightblue';
    }


}

setInterval(actualizarReloj, 1000);
actualizarReloj();

 