// Ejemplo de registro de usuario con un acoplamiento debil
//módulo de usuario
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //mostrar información del usuario
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

//módulo de autenticación
class Autenticacion {
    constructor() {
        this.usuariosRegistrados = [];
    }

    //registrar un usuario
    registrar(usuario) {
        this.usuariosRegistrados.push(usuario);
        console.log('Usuario registrado con éxito.');
    };

    //verificacion con acoplamiento débil
    usuarioExiste(nombre) {
        if (this.usuariosRegistrados.some(user => user.nombre === nombre)) {
            return `El usuario ${nombre} existe en la base de datos`
        } else {
            return `El usuario ${nombre} no esta registrado en la base de datos`
        };
    };
};

const usuario = new Usuario('Jhonatan', 25);
const autenticacion = new Autenticacion();

// registro de usuario
autenticacion.registrar(usuario);

// mostrar informacion de usuario
usuario.mostrarInfo();

// verificando usuario Jhonatan
console.log(autenticacion.usuarioExiste('Jhonatan'));
