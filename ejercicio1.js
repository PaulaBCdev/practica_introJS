const usuario = {
    nombre: "Paula",
    apellidos: "Barrionuevo",
    modulos: [
        {
            name: "Node.js", 
            date: "2025-03-10"},
        {
            name: "Git", 
            date: "2025-03-31"},  //No tenemos módulo de git, así que he puesto la fecha del módulo de Frontend
        {
            name: "React", 
            date: "2025-05-12"},
    ],
    busquedaActiva: true
};

console.log(usuario.modulos[2].date);