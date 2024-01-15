// Crea un array o arreglo unidimensional con un tamaño de 5, asignar los valores numéricos manualmente (los que tu quieras) y mostrarlos por pantalla.

let lista = [4, 2, 23, 1, 9]
lista.forEach(elemento => console.log(elemento))


// Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees de la manera que quieras y muestra por pantalla la media de valores del array.

let lista2 = [4, 2, 23, 1, 9, 3, 8, 6, 43, 10]
suma = 0

lista2.forEach(elemento => suma += elemento)

r = suma / lista2.length
console.log(r)


// Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición. (FindIndex)

let lista3 = ["hola", "mundo", "soy", "David"]
buscar = parseInt(prompt("Cual de los siguientes elementos deseas buscar:\n" + lista3 + "\n: "))

r = lista3[buscar]

console.log(r)


// Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.

aprobar = 14

a = 0
ta = 0
r = 0
tr = 0
let datos = [10, 20, 8, 16, 4,13, 14, 19, 12, 6, 11, 19, 20, 17, 15, 3, 9, 19, 8, 20]

datos.forEach(function(nota){
    if (nota >= aprobar){
        ta += 1
        a += nota
    }
    else{
        tr += 1
        r += nota
    }
})

console.log("Aprobados: " + ta + "\nReprobados: " + tr + "\nPromedio aprobados: " + a + "\nPromedio reprobados: " + r)


// Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.

let enteros = [10, 20, 8, 16, 4, 13, 14, 8, 20];

orden = enteros.sort(function(a, b){return a - b})

let pr = 0;
orden.forEach(p => pr += p);

letpromed = pr / orden.length;

console.log("Mayor: " + orden[orden.length - 1] + "\nMenor: " + orden[0] + "\nPromedio: " + promed);


// ingresa un string de números del cual debes separar todos los números con una coma (,) y formar un array con sus valores.

let v = [8, 16, 4, 13]
cadena = v.join()

console.log(cadena)


// Recibes un Array de números y debes retornar un Array en donde cada número sea multiplicado por dos (Utilizar métodos de array). 

multiplicado = [8, 16, 4, 13]
res = multiplicado.map(elemento => console.log(elemento * 2))


// Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.

function g(l) {
    let impar = []
    
    while (impar.length < l) {
      let nAlea = Math.floor(Math.random() * 100)
      
      if (nAlea % 2 !== 0 && impar.indexOf(nAlea) === -1) {
        impar.push(nAlea);
      }
    }
    return impar
  }
  
  function most(array) {
    console.log("Valor en el centro del array: " + array[Math.floor(array.length / 2)])
  }
  
  let miArray = g(5)
  most(miArray)


// Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que introduzca el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:
// Todos los alumnos mayores de edad.
// Encontrar la edad mayor y obtener los alumnos que posean dicha edad.

nombres = []
edades = []
eMayor = 0
cuantos = parseInt(prompt("Cuantos estudiantes desea agregar: "))

while (cuantos > 0){
    n = (prompt("Ingresa el nombre: "))
 
    if (n === "*" ){
        break
    }
    nombres.push(n)
  
    e = parseInt(prompt("Ingresa la edad: "))
    edades.push(e)
    
    cuantos -= 1
}

edades.forEach(function (e){
    if(e >= 18){
        console.log("esta persona es mayor de edad " + e)
    }
    if (e > eMayor){
        eMayor = e
    }
})

console.log("la edad mayor es: " + eMayor)


// Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
// Carga la tabla con valores numéricos enteros.
// Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en pantalla.
// Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado y crear una función que rellene el array o arreglo con los múltiplos de un número pedido por teclado. Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.

let matriz = new Array(5);
for (let i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(5);
}

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10);
  }
}

for (let i = 0; i < matriz.length; i++) {
  let sumaFila = 0;
  for (let j = 0; j < matriz[i].length; j++) {
    sumaFila += matriz[i][j];
  }
  console.log(`La suma de los elementos de la fila ${i + 1} es: ${sumaFila}`);
}

for (let j = 0; j < matriz[0].length; j++) {
  let sumaColumna = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumaColumna += matriz[i][j];
  }
  console.log(`La suma de los elementos de la columna ${j + 1} es: ${sumaColumna}`);
}

let tamaño = parseInt(prompt("Ingrese el tamaño del arreglo:"));

let numero = parseInt(prompt("Ingrese el número para generar los múltiplos:"));

let arreglo = [];
for (let i = 1; i <= tamaño; i++) {
  arreglo.push(numero * i);
}

console.log("Los múltiplos del número ingresado son:");
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
  