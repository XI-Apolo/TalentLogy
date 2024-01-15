// Media aritmética de 2 números

let nu1 = 5
let nu2 = 10
let media = (nu1 + nu2) / 2
console.log("Media aritmética:", media)


// Menú de operaciones

let operacion = prompt("Ingrese una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir")
let num1 = parseInt(prompt("Ingrese el primer número"))
let num2 = parseInt(prompt("Ingrese el segundo número"))

function realizarOperacion(operacion, num1, num2) {
    switch (operacion) {
        case "1":
            return num1 + num2
        case "2":
            return num1 - num2
        case "3":
            return num1 * num2
        case "4":
            return num1 / num2
        default:
            return "Opción incorrecta"
    }
}

let resultado = realizarOperacion(operacion, num1, num2)
console.log("Resultado:", resultado)


// Convertir número a letras

function convertirNumeroALetras(numero) {
    switch (numero) {
        case 1:
            return "uno"
        case 2:
            return "dos"
        case 3:
            return "tres"
        case 4:
            return "cuatro"
        case 5:
            return "cinco"
        case 6:
            return "seis"
        case 7:
            return "siete"
        case 8:
            return "ocho"
        case 9:
            return "nueve"
        case 10:
            return "diez"
        default:
            return "Número fuera del rango permitido (1 al 10)";
    }
}

let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"))
let numeroEnLetras = convertirNumeroALetras(numeroIngresado)

console.log(`El número ${numeroIngresado} en letras es: ${numeroEnLetras}`)


//Hacer un programa que pida por pantalla una temperatura en grados Celsius, muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15
}

let temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"))
let opcion = parseInt(prompt("Elige una opción:\n1. Convertir a Fahrenheit\n2. Convertir a Kelvin"))

switch(opcion) {
    case 1:
        console.log("La temperatura en Fahrenheit es:", celsiusToFahrenheit(temperaturaCelsius))
        break
    case 2:
        console.log("La temperatura en Kelvin es:", celsiusToKelvin(temperaturaCelsius))
        break
    default:
        console.log("Opción no válida")
}


// Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número cualquiera por pantalla, el número se pedirá en el programa principal. Usar procedimiento.

function crearTabla(numero){
    for (x = 0; x <= 20; x ++){
        console.log(numero + " x " + x + " = " + numero * x)
    }
}

tablaNumero = parseInt(prompt("Ingrese el numero para hacer la tabla:"))
crearTabla(tablaNumero)

// Hacer un programa que muestre 3 números ordenados ascendentemente, utilizando un procedimiento para cada operación. 

let miLista = [2, 1, 6]
miLista.sort(function(a, b){
    return a - b
})

console.log(miLista)

// Hacer un programa que muestre 3 números ordenados descendentemente, utilizar un procedimiento para cada operación.

let miLista2 = [2, 4, 1, 6, 9]

miLista2.sort((a, b) => b -a)
console.log(miLista2)


// Serie Fibonacci con Recursividad: 1.1.2.3.5.8…

function fibonacci(n){
    if ( n < 1){
        return n
    }
    else{
        return fibonacci(n -1) + fibonacci(n - 2)
    }
}

for (x = 1; x <= 20; x ++){
    console.log(Math.abs(fibonacci(x)))
}


// Consideremos una función que recibe un número n e imprime los números del n al 1 con recursividad.

function recibe(x){
    for (i = 20; i >= 1; i --)
        console.log(i)
}

recibe(20)


// Pasar de número entero a número binario con Recursividad.
convertir = parseInt(prompt("Ingresa un número entero para convertirlo en binario: "))
resultado = ""

while (convertir > 0){
    e = convertir % 2
    resultado += e.toString()
    convertir = Math.floor(convertir / 2)
}

const reverseString = str => str.split("").reverse().join("")
const r = reverseString(resultado)
console.log(r)


// Invertir un número entero con Recursividad.

convertir = prompt("Ingresa un número entero para invertirlo: ");

c = convertir.split("")
m = c.length
r = ""

for (x = 0; x < m; x++) {
    r += c[m - 1 - x]
}

console.log(r)