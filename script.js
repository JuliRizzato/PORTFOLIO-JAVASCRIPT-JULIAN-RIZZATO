
/*

//1. Calculadora

//Pedir los datos al usuario
let numero1 = parseFloat(prompt('Ingrese el primer número: '));
let numero2 = parseFloat(prompt('Ingrese el segundo número: '));
let operacion = prompt('Ingrese la operación (+, -, *, /): ');

let resultado;
//Comprobar si los datos ingresados son números
if (isNaN(numero1) || isNaN(numero2)){
    alert('ERROR: No has ingresado nùmeros');
} else{
//Estructura condicional
if (operacion === '+'){
    resultado = numero1 + numero2;
} else if (operacion === '-'){
    resultado = numero1 - numero2;
} else if (operacion === '*'){
    resultado = numero1 * numero2;
} else if (operacion === '/'){
    //Comprobar que ninguno de los números sea 0 para la división
    if(numero1 == 0 || numero2 == 0){
       alert('ERROR: Divisón con cero'); 
    } else{
            resultado = numero1 / numero2;
    }
} else{
    alert('Operacón no válida');
}}
console.log(`Resultado: ${resultado}`);

*/

/*

//2. ADIVINA EL NÚMERO

const numeroSecreto = Math.floor(Math.random() * 20) + 1; //Número entre 1 y 10
let intentos = 6;
let adivinado = false;

while (intentos > 0 && !adivinado){
    let numero = parseInt(prompt(`Adivina el número(1 al 20). Intentos restantes: ${intentos}`));

    if(numero === numeroSecreto){
        alert('¡Adivinaste el número!');
        adivinado = true;
    } else if(numero > numeroSecreto){
        alert('El número secreto es menor.');
    } else if(numero < numeroSecreto){
        alert('El número secreto es mayor.');
    }
intentos--;
}
if(!adivinado){
    alert(`Perdiste, el número era: ${numeroSecreto}`)
}

*/

/*

//3. Generador de tablas de multiplicar

let numeroT = parseInt(prompt('Ingrese un número para ver su tabla de multiplicar:'));
let limite = parseInt(prompt('¿Hasta qué número quieres multiplicar?:'));
let arrayos = []

console.log(`Tabla de multiplicar del ${numeroT}`);

for (let i = 1; i <= limite; i++){
   console.log(`${numeroT} x ${i} = ${numeroT * i}`);
   arrayos.push(numeroT * i);
}
console.log(arrayos)


//Desafío: Guarda los resultados en un array y muéstralos con un for...of

// 2️⃣ Desafío: mostrar los resultados usando for...of
console.log("Mostrando los resultados con for...of:");
let contador = 1; // para saber en qué multiplicación vamos

for (let resultado of arrayos) {
  console.log(`${numeroT} x ${contador} = ${resultado}`);
  contador++; // avanzamos al siguiente número
}

*/

//4. Conversor de Temperaturas

//Función declarativa
function celsiusAFarenheit(celsius){
    return (celsius * 9) / 5 + 32;
}
const kelvinACelsius = (kelvin) => (kelvin - 273.15);

//Función flecha
const farenheitACelcius = (farenheit) => ((farenheit - 32) * 5) / 9;

//Programa principal
let opcion = prompt('Elige una opción:\n1. °C -> °F\n2. °F -> °C\n3. °K -> °C');

if (opcion === '1'){
    let celsius = parseFloat(prompt('Ingrese la temperatura en °C:'));
    console.log(`${celsius}°C = ${celsiusAFarenheit(celsius).toFixed(2)}°F`);
} else if (opcion === '2'){
    let farenheit = parseInt(prompt('Ingrese la temperatura en °F:'));
    console.log(`${farenheit}°F = ${farenheitACelcius(farenheit).toFixed(2)}°C`);
} else if (opcion === '3'){
    let kelvin = parseInt(prompt('Ingrece la temperatura en °K:'));
    console.log(`${kelvin}°K = ${kelvinACelsius(kelvin).toFixed(2)}°C`);
} else {
    console.log('Opción no válida');
}

//Agregar una tercera opción que permita convertir Kelvin a Celsius

//5. Lista de compras totales

let listaCompras = [
    {nombre: 'Leche', precio: 1200, cantidad: 2},
    {nombre: 'Pan', precio: 800, cantidad: 5},
    {nombre: 'Huevos', precio: 2500, cantidad: 3},
    {nombre: 'Café', precio: 3200, cantidad: 1},
];

// Mostrar lista con forEach
console.log('Lista de compras:');
listaCompras.forEach((item) => {
    console.log(`- ${item.nombre} (x${item.cantidad}) $${item.precio}`);
});

//Calcular el total usando reduce
const total = listaCompras.reduce(
    (acum, item) => acum + item.precio * item.cantidad,
    0
);
console.log(`Total a pagar: $${total}`);

//Filtrar productos caros

const productosCaros = listaCompras.filter((item) => item.precio > 2000);
console.log('Productos con precio mayor a $2000:', productosCaros);

//Buscar un producto
const buscar = prompt('Ingrese el nombre del producto que desea buscar:');
const encontrado = listaCompras.find(
    (item) => item.nombre.toLocaleLowerCase() === buscar.toLocaleLowerCase()
);
if (encontrado){
    console.log(`Encotrado: ${encontrado.nombre} cuesta $${encontrado.precio}`
    );
} else {
    console.log('Producto no encontrado');
}

//Permite al usuario agregar o eliminar productos de la lista dinámicamente usando push() y splice()

//Agregar un producto
function agregarProducto(nombre, precio, cantidad){
let productoNuevo = {nombre: nombre, precio: precio, cantidad: cantidad};
listaCompras.push(productoNuevo);
};

//Eliminar un producto
function eliminarProducto(nombre){


};


/*

//AGENDA DE CONTACTOS 

let agenda = JSON.parse(localStorage.getItem('agenda')) || [];

//Guardar cambios en localStorage
function guardarAgenda(){
    //localStorage.setItem('agenda', JSON.stringify(agenda));
}


//Función para agregar contactos
function agregarContacto(nombre, telefono, email){
const contacto = {nombre, telefono, email};
agenda.push(contacto);
guardarAgenda();
console.log(`Contacto agregado: ${nombre}`);
};

//Función para mostrar todos los contactos
function mostrarAgenda(){
console.log('Lista de contactos:');
agenda.forEach(({nombre, telefono, email}, i) => {
    console.log(`${i + 1}. ${nombre} - ${telefono} - ${email}`);
});
};

//Función para buscar contacto
function buscarContacto(nombre){
    const contacto = agenda.find((c) => c.nombre.toLowerCase() === nombre.toLowerCase()
);
if (contacto){
    console.log(`Encontrado: ${contacto.nombre} - ${contacto.telefono}`);
} else {
    console.log('Contacto no encotrado');
}};

//Función para eliminar contacto
function eliminarContacto(nombre){
    agenda = agenda.filter(
        (c) => c.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    guardarAgenda();
    console.log(`Contacto elimninado: ${nombre}`);
}


//Prograna principal(ejemplo)
agregarContacto('Ana', '261-1234567', 'ana@gmial.com');
agregarContacto('Luis', '261-7654321', 'luis@gmail.com');
mostrarAgenda();

buscarContacto('Ana');
eliminarContacto('Luis');
buscarContacto('Ana');























//Cronómetro


let segundos = 0;
let intervalo;
function actualizarCronometro(){
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const mins = String(Math.floor(segundos % 3600 / 60)).padStart(2, '0');
    const secs = String(segundos % 60).padStart(2, '0');

    document.getElementById('cronometro').textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById('iniciar').addEventListener('click', () => {
  if (!intervalo){
    intervalo = setInterval(() => {
        segundos++;
        actualizarCronometro();
    }, 1000);
  }
});

document.getElementById('pausar').addEventListener('click', () => {
     clearInterval(intervalo);
    intervalo = null;
});

document.getElementById('reiniciar').addEventListener('click', () => {
    segundos = 0;
    actualizarCronometro();
    clearInterval(intervalo);
    intervalo = null;
});

*/















