// Pedir 2 números al usuario y sumarlos, restarlos, multiplicarlos y dividirlos.
let n1 = parseFloat(prompt("Ingresa un número: "));
let n2 = parseFloat(prompt("Ingresa otro número: "));
let s = n1 + n2;
let r = n1 - n2;
let m = n1 * n2;
let d = n1 / n2;
console.log(s, r, m, d);


// Convertir Grados Celsius a Grados Fahrenheit.
let c = parseFloat(prompt("Ingresa la temperatura en grados Celsius: "));
let res = (c * 9/5) + 32;
console.log(res);


// Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos.
let cate1 = parseFloat(prompt("Ingresa el valor para el cateto 1: "));
let cate2 = parseFloat(prompt("Ingresa el valor para el cateto 2: "));
let hipotenusa = Math.sqrt(Math.pow(cate1, 2) + Math.pow(cate2, 2));
console.log(hipotenusa);


// Hacer un Programa que calcule longitudes de Circunferencia.
let radio = parseFloat(prompt("Ingresa el radio de la circunferencia: "));
let longitud = 2 * Math.PI * radio;
console.log(longitud);


// Hacer un Programa que calcule áreas de trapecios.
let bmenor = parseFloat(prompt("Ingresa la longitud de la base menor: "));
let bmayor = parseFloat(prompt("Ingresa la longitud de la base mayor: "));
let altura = parseFloat(prompt("Ingresa la altura del trapecio: "));
let area = (bmenor + bmayor) * altura / 2;
console.log(area);


// Calcule la media aritmética de 3 números cualesquiera.
n1 = parseFloat(prompt("Ingresa un número: "));
n2 = parseFloat(prompt("Ingresa otro número: "));
let n3 = parseFloat(prompt("Ingresa otro número: "));
r = (n1 + n2 + n3) / 3;
console.log(r);


// Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.
let total = parseFloat(prompt("Ingresa el total de la compra: "));
let descuento = total * 0.15;
total = total - descuento;
console.log(total);


// Dadas las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimirlo.
let salario = parseFloat(prompt("Ingresa el total de horas trabajadas: "));
let valor = parseFloat(prompt("Ingresa el valor por hora: "));
total = salario * valor;
console.log(total);


// Calcular el nuevo salario de un obrero, si obtuvo un incremento del 25% sobre su salario anterior.
let nuevoSalario = parseFloat(prompt("Ingresa el salario anterior: "));
let incremento = nuevoSalario * 0.25;
nuevoSalario = nuevoSalario + incremento;
console.log(nuevoSalario);


// Comprobar a través de un programa si un alumno aprobó o no un examen (Aprueba si su nota es mayor a 10.5).
let aprobo = parseFloat(prompt("Ingresa la nota del alumno: "));
if (aprobo > 10.5) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}


// Comprobar si un número digitado por el usuario es positivo o negativo.
let numero = parseFloat(prompt("Ingresa un número: "));
if (numero > 0) {
    console.log("Positivo");
} else {
    console.log("Negativo");
}


// Visualizar la tarifa de la luz según el gasto de corriente eléctrica. Para un gasto menor de 1.000Kwxh la tarifa es 1.2, entre 1.OOO y 1.850Kwxh es 1.0 y mayor de 1.85OKwxh 0.9.
let tarifa = parseFloat(prompt("Ingresa el gasto de corriente eléctrica: "));
if (tarifa < 1000) {
    console.log("Tarifa: 1.2");
} else if (tarifa >= 1000 && tarifa <= 1850) {
    console.log("Tarifa: 1.0");
} else {
    console.log("Tarifa: 0.9");
}


// Determinar si un número es par, impar.
let numeroParImpar = parseFloat(prompt("Ingresa un número: "));
if (numeroParImpar % 2 === 0) {
    console.log("Par");
} else {
    console.log("Impar");
}


// Calcular el mayor de dos números leídos del teclado y visualizarlo en pantalla.
let numeros = prompt("Ingresa dos números separados por espacio: ").split(" ");
if (parseFloat(numeros[0]) > parseFloat(numeros[1])) {
    console.log(numeros[0]);
} else {
    console.log(numeros[1]);
}


// Ingrese un número y calcule e imprima su raíz cuadrada. Si el número es negativo imprima el número y un mensaje que diga “tiene raíz imaginaria”.
let raiz = parseFloat(prompt("Ingresa un número: "));
if (raiz < 0) {
    console.log("Tiene raíz imaginaria");
} else {
    console.log(Math.sqrt(raiz));
}


// Ingresar por teclado el nombre y el signo de cualquier persona e imprima, el nombre sólo si la persona es signo Aries, caso contrario imprima no es signo Aries.
let nombre = prompt("Ingresa el nombre: ");
let signo = prompt("Ingresa el signo: ");
if (signo.toLowerCase() === "aries") {
    console.log(nombre);
} else {
    console.log("No es signo Aries");
}


// Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima, solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.
let cualquierPersona = prompt("Ingresa el nombre: ");
let edadPersona = parseInt(prompt("Ingresa la edad: "));
let sexoPersona = prompt("Ingresa el sexo: ");
if (sexoPersona.toLowerCase() === "masculino" && edadPersona > 18) {
    console.log(cualquierPersona);
} else {
    console.log("No es de sexo masculino o no es mayor de edad");
}


// Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente. Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, las otras marcas 2%
let marcaMoto = prompt("Ingresa la marca de la moto: ").toLowerCase();
let precioMoto = parseFloat(prompt("Ingresa el precio de la moto: "));
let descuentoMoto;
if (marcaMoto === "honda") {
    descuentoMoto = precioMoto * 0.05;
} else if (marcaMoto === "yamaha") {
    descuentoMoto = precioMoto * 0.08;
} else if (marcaMoto === "suzuki") {
    descuentoMoto = precioMoto * 0.10;
} else {
    descuentoMoto = precioMoto * 0.02;
}
let precioFinal = precioMoto - descuentoMoto;
console.log(precioFinal);
