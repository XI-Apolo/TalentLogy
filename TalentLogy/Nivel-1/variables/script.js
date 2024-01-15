// Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el descuento 20%, el programa dirá que el precio final con descuento es de 240. 
let precio = prompt("ingrese el precioi total: ")
let descuento = prompt("ingrese el descuento que se desea realizar: ")

let total = (precio / 100) * descuento 


// Suponiendo que 1 euro = 1.33250 dólares. Escribe un programa que pida al usuario un número de dólares y calcule el cambio en euros. 
let euro = 1.33250
let uds = prompt("ingrese el total de dolares que desea convertir: ")

r = usd * euro
console.log(r)

// Escribir un programa que pida por teclado cuatro números y calcule y presente la media de los cuatro. 
let n1 = prompt("Diga un numero para el valor 1: ") 
let n2 = prompt("Diga un numero para el valor 2: ") 
let n3 = prompt("Diga un numero para el valor 3: ") 
let n4 = prompt("Diga un numero para el valor 4: ") 

let r = (n1 + n2 + n3 + n4) / 4
console.log(r)


// Escribir un programa que pida por teclado dos resistencias y calcule y presente la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)). 
let r1 = prompt("Diga un numero para la resistencia 1: ") 
let r2 = prompt("Diga un numero para la resistencia 2: ") 

let res = (r1 * r2) / (r1 + r2)
console.log(res)

// ¿Cuál es la diferencia entre una variable y una constante?
//una variable es aquella que almacena un valor en memoria que puede cambiar, mientras que una constante no cambia su valor una vez es definida.

// ¿Cuándo se deberían usar ?
//cuando queramos almacenar un valor para luego usarlo en algun lugar del codigo o mostrarlo.