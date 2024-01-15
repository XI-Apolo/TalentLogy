// Un bucle while que cuente desde 50 hasta 40 (fíjate que en este caso es decreciente)
let contado = 50
while (contado >= 40) {
    console.log(contador)
    contador -= 1
}


// Un bucle while que a partir de una variable “contador” que toma valores de 1 a 5, muestre por pantalla el doble del valor de “contador”, es decir, que muestre 2, 4, 6, 8, 10.
let contadorr = 1
while (contadorr <= 5) {
    console.log(contadorr * 2)
    contadorr += 1
}


// Calcular la suma de los primeros cien números con un ciclo.
let contadorrr = 1
let sum = 0
while (contadorrr <= 100) {
    sum += contadorrr
    contadorrr += 1
}


// Construir un programa que calcule y visualice por pantalla el factorial de todos los valores numéricos enteros entre 1 y 10.
let contadorrrr = 1
let factorial = 1
while (contadorrrr <= 10) {
    factorial *= contadorrrr
    contadorrrr += 1
}


// Escribir un programa que dado un número entero positivo n, calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n
let numero = 1
let suma = 0
while (numero <= 10) {
    suma += 1 / numero
    numero += 1
}


// Escribir un programa que calcule los primeros ‘n’ números de Fibonacci. Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …
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


// Escribir un programa que, dadas 5 notas finales, determine cuántas notas fueron mayores o iguales a 3.0.
let notas = [4.5, 2.5, 3.5, 4.0, 2.0]
let contador = 0
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 3.0) {
        contador += 1
    }
}
console.log("Número de notas mayores o iguales a 3.0:", contador)


// Desarrollar un programa que calcule el factorial de un número entero positivo. El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta el número en cuestión.
let num = 5
let fact = 1
let cont = 1
while (cont <= num) {
    fact *= cont
    cont += 1
}


// Escribir un programa que imprima todos los números pares entre dos números que se le pida al usuario.
let num1 = 1
let num2 = 10
let contt = num1
while (contt <= num2) {
    if (contt % 2 === 0) {
        console.log(contt)
    }
    contt += 1
}


// Realizar un algoritmo para determinar cuánto ahorrará una persona en un año, si al final de cada mes deposita cantidades variables de dinero; además, se quiere saber cuánto lleva ahorrado cada mes.
let mes = 1
let ahorro = 0
let deposito = 100
while (mes <= 12) {
    ahorro += deposito
    console.log(ahorro)
    mes += 1
}
