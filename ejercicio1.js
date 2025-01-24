const usuario = {
    nombre: "Paula",
    apellidos: "Barrionuevo",
    temas: [
        ["Node.js", "2025-03-10"],
        ["Git", "2025-03-31"],  //No tenemos módulo de git, así que he puesto la fecha del módulo de Frontend
        ["React", "2025-05-12"]
    ],
    busquedaActiva: true
};

console.log(usuario.temas[2][1])