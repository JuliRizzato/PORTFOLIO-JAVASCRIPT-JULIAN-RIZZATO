//Calculadora


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


//ADIVINA EL NÚMERO

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

// Generador de tablas de multiplicar

let numeroT = parseInt(prompt('Ingrese un número para ver su tabla de multiplicar:'));
let limite = parseInt(prompt('¿Hasta qué número quieres multiplicar?:'));

console.log(`Tabla de multiplicar del ${numeroT}`);
for (let i = 1; i <= limite; i++){
   console.log(numeroT * i);
}


//Desafío: Guarda los resultados en un array y muéstralos con un for...of