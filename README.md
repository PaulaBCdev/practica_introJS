# Práctica de Introducción a JavaScript
----------------------------------------

En este repositorio se encuentran mis soluciones a los 6 ejercicios planteados como práctica final del módulo de Introducción a JavaScript.

En ningún caso se han utilizado librerías y únicamente hay un archivo HTML, donde ya están escritas todas las etiquetas script enlazadas a los ejercicios. Están comentadas, así que solo hay que ir descomentándolas una a una para poder probarlas.

A continuación aparecen los enunciados de dichos ejercicios, ya que no se incluyen en los archivos de las soluciones.


## Ejercicio 1

Crea un archivo **ejercicio1.js** que tenga un objeto llamado *usuario* con los siguientes campos:

- Nombre (el tuyo o inventado)  --> un string
- Apellidos (el tuyo o inventado)  --> un string
- Una lista con los temas del bootcamp *Node.js*, *Git*, y *React* con sus nombres y fechas de inicio de cada módulo en formato "YYYY-MM-DD"  --> un array de objetos
- Si estás en búsqueda activa con un valor de verdadero o falso  --> un booleano

En este archivo queremos mostrar por pantalla la **fecha de inicio del módulo de React** del objeto que hemos creado anteriormente.



## Ejercicio 2

Nuestro cliente está intentando calcular el promedio de una lista de números, pero nos dice que no funciona. No nos da el error, solo este código que es el que tiene en producción. Para este ejercicio tenemos que crear un archivo llamado **bug.js** con la solución.

Este es el código incorrecto del cliente:

```js
const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i >= numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
```

## Ejercicio 3

En estos ejercicios no tienes acceso al enunciado. Debes deducir qué hacer observando los datos de entrada y el resultado:

### Ejercicio 3.1

Crea una función para que, con estos datos de entrada, se produzcan los siguientes resultados:

```js
const input1 = [
    "Download",
    "videos",
    "capture",
    "mp4"
];

// create your function here

yourFunction(input1); // "Downloads/Videos/capture.mp4"

const input2 = [
    "CodingCame",
    "python",
    "py"
];

yourFunction(input2); // "CodinGame/python.py"


const input3 = [
    "programming",
    "languages",
    "easy",
    "beginner",
    "useful",
    "pythonstuff",
    "py"
];

yourFunction(input3); // "programming/languages/easy/beginner/useful/pythonstuff.py"
```

### Ejercicio 3.2

Crea una función para que, con estos datos de entrada, se produzcan los siguientes resultados:

```js
const input = 10;

// create your function here

yourFunction(input); // "1-0"

const secondInput = 1;

yourFunction(secondInput); // "1"

const thirdInput = 11234;

yourFubction(thirdInput); // "1-1-2-3-4"
```

### Ejercicio 3.3

Crea una función para que, con estos datos de entrada, se produzcan los siguientes resultados:

```js
const input1 = "string";

// create your function here

yourFunction(input1); // "6 gnirts"

const input2 = "variable";

yourFunction(input2); // "8 elbairav"

const input3 = "pointer";

youtFunction(input3); // "7 retniop"
```

Lo importante en estos ejercicios es ver el patrón con cad ejemplo. En ningún caso es necesario usar ningún tipo de condicional.


## Ejercicio 4

Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente información:

- El listado de los desarrolladores que tengan como habilidad **"JavaScript"**
- El listado de los proyectos en el que sus desarrolladores trabajan

Estos son los datos:

```js
const datos = [
    {
        id: 1,
        nombre: "Juan",
        habilidades: ["JavaScript", "HTML", "CSS"],
        proyectos: [
            { id: 1, nombre: "Proyecto 1" },
            { id: 2, nombre: "Proyecto 2" }
        ]
    },
    {
        id: 2,
        nombre: "María",
        habilidades: ["Python", "SQL", "Django"],
        proyectos: [
            { id: 3, nombre: "Proyecto 3" },
            { id: 4, nombre: "Proyecto 4" }
        ]
    }, 
    {
        id: 3,
        nombre: "Pedro",
        habilidades: ["Java", "Spring", "Hibernate"],
        proyectos: [
            { id: 5, nombre: "Proyecto 5" },
            { id: 6, nombre: "Proyecto 6" }
        ]
    }
];
```

Tenemos que hacer las operaciones necesarias para obtener estos 2 listados:

```js
/* desarrolladoresJavaScript */
[
    {
        id: 1,
        nombre: "Juan",
        habilidades: ["JavaScript", "HTML", "CSS"],
        proyectos: [
            { id: 1, nombre: "Proyecto 1" },
            { id: 2, nombre: "Proyecto 2" }
        ]
    }
]

/* nombresProyectos */
["Proyecto 1", "Proyecto 2", "Proyecto 3", "Proyecto 4", "Proyecto 5", "Proyecto 6"]
```

Hay que crear un archivo **transform.js** con la solución. Este archivo tiene que tener 2 funciones que nos retornen los valores correctos. **NO USAR NI FOR NI WHILE**. Se trata de un ejercicio para practicar el uso de map y filter.


## Ejercicio 5

Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario y nos dice que está usando el id correcto: el 1. Pero siempre le da la información undefined. Nos ha pasado el código que tenemos que revisar y arreglar. Para este problema hay que crear un archivo llamado **bugAsync.js** con la solución.

```js
// Este programa simula una llamada asincrónica para obtener un usuario

function obtenerUsuario(id) {
    let usuario;

    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: "John Doe" };
        }
    }, 2000);

    return usuario;
}

const usuario = obtenerUsuario(1);
console.log(usuario);
```


## Ejercicio 6

Tenemos un cliente que tiene una página donde se pueden crear listados de canciones.

El cliente ha creado la maquetación y la lógica de los ofrmularios e interacciones con botones para ordenar, marcar como favorito y borrar. Sin embargo, necesita nuestra ayuda para manejar el estado o lógica de esta web.

Para ello nos pide que creemos un estado en una función(usando cierres) que tenemos que exportar y se va a encargar de gestionar las funcionalidades de la app.

Nuestro cliente nos dio el archivo que tenemos que modificar para hacer funcionar su web. **Únicamente es necesario modificar este archivo**. Este se encuentra en la carpeta **playlist/js/playlist.js**.

Cada playlist tiene un nombre y un listado de canciones. Las canciones tienen título, nombre del artista, género musical, duración en segundos y si es tu favorita.

En un comentario estaría la estructura de datos.
