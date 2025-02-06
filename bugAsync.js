
function obtenerUsuario(id) {
    return new Promise((resolve) => {
        let usuario;
    
        setTimeout(() => {
            if (id === 1) {
                usuario = { id: 1, nombre: "John Doe" };
            }
            resolve(usuario);
        }, 2000);
    })
}

const usuario = obtenerUsuario(1).then((usuario) => {
    console.log(usuario);
});
