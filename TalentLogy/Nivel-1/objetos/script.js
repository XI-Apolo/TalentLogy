//Crea una clase Cuenta con los métodos ingreso, reintegro y transferencia. La clase contendrá un constructor por defecto y los métodos getters y setters.

class Cuenta{
    constructor(nombre, numero){
        this._nombre = nombre
        this._numero = numero
    }
    get nombre() {
        return this._nombre
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }

    get cuenta() {
        return this._cuenta
    }

    set cuenta(nuevaCuenta) {
        this._cuenta = nuevaCuenta
    }


    ingreso(){

    }
    reintegro(){
        
    }
    trasnferencia(){
        
    }
}

let cuenta1 = new Cuenta("David", "1234567890")

console.log(cuenta1.nombre)
console.log(cuenta1.cuenta)


// Crea una clase Contador con los métodos para incrementar y decrementar el contador. La clase contendrá un constructor por defecto y los métodos getters y setters.

class Contador {
    constructor() {
        this._valor = 0
    }

    get valor() {
        return this._valor
    }

    set valor(n) {
        this._valor = n
    }

    incrementar() {
        this._valor++
    }

    decrementar() {
        this._valor--
    }
}

let c = new Contador()

console.log(c.valor)

c.incrementar()
console.log(c.valor)

c.decrementar()
console.log(c.valor)

c.valor = 10
console.log(c.valor)


// Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
// El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
// Crea sus métodos get, set y toString.
// Tendrá dos métodos especiales:
// Ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
//Retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.

class Cuenta {
    constructor(titular, cantidad = 0) {
        this.titular = titular
        this.cantidad = cantidad
    }

    get titular() {
        return this._titular
    }

    set titular(nuevoTitular) {
        this._titular = nuevoTitular
    }

    get cantidad() {
        return this._cantidad
    }

    set cantidad(nuevaCantidad) {
        this._cantidad = nuevaCantidad
    }

    toString() {
        return `Titular: ${this.titular}, Cantidad: ${this.cantidad}`
    }

    ingresar(cantidad) {
        if (cantidad > 0) this.cantidad += cantidad
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 0) this.cantidad = 0
        else this.cantidad -= cantidad
    }
}

let miCuenta = new Cuenta("David", 1000)

console.log(miCuenta.toString())

miCuenta.ingresar(500)
console.log(miCuenta.toString())

miCuenta.retirar(800)
console.log(miCuenta.toString())

miCuenta.retirar(2000)
console.log(miCuenta.toString())


// Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y la nota del alumno. Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.´

class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
    }

    inicializar(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
    }

    imprimir() {
        console.log(`Nombre: ${this.nombre}, Nota: ${this.nota}`)
    }

    mostrarResultado() {
        if (this.nota >= 5) console.log(`${this.nombre} ha aprobado.`)
        else console.log(`${this.nombre} ha reprobado.`)
    }
}

let alumno1 = new Alumno()
alumno1.inicializar("David", 8)

let alumno2 = new Alumno()
alumno2.inicializar("Laura", 4)

alumno1.imprimir()
alumno1.mostrarResultado()

alumno2.imprimir()
alumno2.mostrarResultado()


// Realizar un programa que tenga una clase Persona con las siguientes características. La clase tendrá como atributos el nombre y la edad de una persona. Implementar los métodos necesarios para inicializar los atributos, mostrar los datos e indicar si la persona es mayor de edad o no.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    inicializar(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`)
    }

    esMayorDeEdad() {
        if (this.edad >= 18) console.log(`${this.nombre} es mayor de edad.`)
        else console.log(`${this.nombre} no es mayor de edad.`)
    }
}

let persona1 = new Persona()
persona1.inicializar("Smock", 25)

let persona2 = new Persona()
persona2.inicializar("Apolo", 16)

persona1.mostrarDatos()
persona1.esMayorDeEdad()

persona2.mostrarDatos()
persona2.esMayorDeEdad()


// Desarrollar un programa que cargue los datos de un triángulo. Implementar una clase con los métodos para inicializar los atributos, imprimir el valor del lado con un tamaño mayor y el tipo de triángulo que es (equilátero, isósceles o escaleno).

class Triangulo {
    constructor(tipo, lado1, lado2, lado3) {
        this.tipo = tipo
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    calcularLadoMayor(){
        let mayor = this.lado1
        if (this.lado2 > mayor) mayor = this.lado2
        if (this.lado3 > mayor) mayor = this.lado3
        return mayor
    }
}

let triangulo1 = new Triangulo("Equilatero", 5, 5, 5)
let triangulo2 = new Triangulo("Isosceles", 5, 5, 3)

console.log(triangulo1.calcularLadoMayor() + " es el lado mayor" + "y el triangulo es " + triangulo1.tipo)
console.log(triangulo2.calcularLadoMayor() + " es el lado mayor" + "y el triangulo es " + triangulo2.tipo)


// Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono y el email. Además deberá mostrar un menú con las siguientes opciones
// Añadir contacto
// Lista de contactos
// Buscar contacto
// Editar contacto
// Cerrar agenda

class Agenda {
    constructor(nombre, telefono, email) {
        this.nombre = nombre
        this.telefono = telefono
        this.email = email
    }

    menu() {
        console.log("1. Añadir contacto")
        console.log("2. Lista de contactos")
        console.log("3. Buscar contacto")
        console.log("4. Editar contacto")
        console.log("5. Cerrar agenda")
    }

    añadirContacto(nombre, telefono, email) {
        this.nombre = nombre
        this.telefono = telefono
        this.email = email
    }

    listaContactos() {
        console.log(`Nombre: ${this.nombre}, Telefono: ${this.telefono}, Email: ${this.email}`)
    }

    buscarContacto(nombre) {
        if (this.nombre == nombre) console.log(`Nombre: ${this.nombre}, Telefono: ${this.telefono}, Email: ${this.email}`)
    }

    editarContacto(nombre, telefono, email) {
        this.nombre = nombre
        this.telefono = telefono
        this.email = email
    }

    cerrarAgenda() {
        console.log("Agenda cerrada")
    }

}

let agenda1 = new Agenda()

agenda1.añadirContacto("David", 123456789, "david@gamil.com")
agenda1.listaContactos()

agenda1.buscarContacto("David")
agenda1.editarContacto("David", 987654321, "apolo@gmail.com")

agenda1.listaContactos()
agenda1.cerrarAgenda()


//Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor. Calcular después la suma, resta, multiplicación y división. Utilizar un método para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.

class Calculadora {
    constructor(n1, n2) {
        this.n1 = n1
        this.n2 = n2
    }

    suma() {
        return this.n1 + this.n2
    }

    resta() {
        return this.n1 - this.n2
    }

    multiplicacion() {
        return this.n1 * this.n2
    }

    division() {
        return this.n1 / this.n2
    }
}

let calculadora1 = new Calculadora(10, 2)
let calculadora2 = new Calculadora(5, 5)