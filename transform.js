
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

const obtenerDessarrolladoresJS = (list) => {
    const desarrolladoresJS = list.filter(({ habilidades }) => habilidades.includes("JavaScript"));
    
    return desarrolladoresJS;
}
const desarrolladoresJS = obtenerDessarrolladoresJS(datos);
console.log(desarrolladoresJS);


const obtenerProyectos = (list) => {
    /* const nombresProyectos = list.map(({proyectos}) => 
        proyectos.map(({nombre}) => nombre)
    ).join(",").split(","); */

    const nombresProyectos = list.flatMap(({ proyectos }) => proyectos.flatMap(({ nombre }) => nombre));

    return(nombresProyectos)
}
const nombresProyectos = obtenerProyectos(datos);
console.log(nombresProyectos)

