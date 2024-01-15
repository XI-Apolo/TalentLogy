// Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.

let nombre = prompt("Cual es u nombre: ")
for (x = 0; x < 3; x ++){
    console.log(nombre)
}


// Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca muestre por pantalla <NOMBRE> tiene <n> letras, donde <NOMBRE> es el nombre de usuario en mayúsculas y <n> es el número de letras que tienen el nombre.

let n = prompt("Cual es u nombre: ")
console.log("tu " + n + " tiene " + n.length + " letras.")

// Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension donde el prefijo es el código del país +34, y la extensión tiene dos dígitos (por ejemplo +34-913724710-56). Escribir un programa que pregunte por un número de teléfono con este formato y muestre por pantalla el número de teléfono sin el prefijo y la extensión.

let numero = prompt("Escribe un número de teléfono con el siguiente formato, +34-913724710-56\nEscribe aquí:");

let mod = numero.replace(/[^\d-]/g, '')
let partes = mod.split('-')
let numeroPrincipal = partes[1]

console.log(numeroPrincipal)



// Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre por pantalla la frase invertida.

let pha = prompt("agrega una frase para invertirla: ")
nueva = pha.split("")
inv = nueva.reverse().join("")
console.log("la cadena ahora esta invertida: " + inv)


// Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal, y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.

let v = prompt("escribe una frase: ")
let vc = prompt("escribe una vocal: ")

r = vc.toUpperCase()
console.log(v + " " + r)


// Escribir un programa que pregunte el correo electrónico del usuario en la consola y muestre por pantalla otro correo electrónico con el mismo nombre (la parte delantera de la arroba @) pero con dominio ceu.es.

let corre = prompt("escribe una direccion de correo electronico: ")
fin = ""

let x = corre.split("")

for(i = 0; i < x.length; i ++){
    
    if(x[i] === "@"){
        break
    }
    fin += x[i]
}

fin += "@ceu.es"

console.log(fin)


// Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa y muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior para que también funcione cuando el día o el mes se introduzcan con un solo carácter.




// Escribir un programa que pregunte por consola por los productos de una cesta de la compra, separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.

let compra = prompt("escribe los producos separados por coma: ")

separar = compra.split(",")

separar.forEach(element => {
    console.log("el producto es: " + element)
})


// Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.

let pal = prompt("escribe una oracion: ")
cont = 0

separar = pal.split(" ")

separar.forEach(element => {
    cont += 1
})

console.log("la oracion tiene: " + cont + " palabras.")


// Crear Función que determine si un string numérico es capicua EJ: “12321”

let ca = prompt("Escribe la palabra: ");
let rev = ca.split('').reverse().join('');

function capicua(p) {
    if (p === rev) {
        console.log("Es capicua");
    } else {
        console.log("No es capicua");
    }
}

capicua(ca);