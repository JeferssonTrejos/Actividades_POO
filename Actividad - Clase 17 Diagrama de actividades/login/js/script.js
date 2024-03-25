class Sesion {
    constructor(bdusuario, bdpwd, usuario, pass) {
        this.usuario = usuario;
        this.pass = pass;
        this.bdusuario = bdusuario;
        this.bdpwd = bdpwd;
    };

    validar() {
        switch (true) {
            case this.usuario != this.bdusuario && this.pass != this.bdpwd:
                alertify.error('El nombre de usuario es incorrecto');
                alertify.error('La contraseña es incorrecta');
                break

            case this.usuario != this.bdusuario:
                alertify.error('El nombre de usuario es incorrecto');
                break

            case this.pass != this.bdpwd:
                alertify.error('La contraseña es incorrecta');
                break;

            default:
                alertify.success('Inicio de sesión exitoso');
                setTimeout(e =>{window.location.href = './registro.html';}, 2000);
                break;
        }
    };
};


class usuario extends Sesion {
    constructor(bdusuario, bdpwd, usuario, pass) {
        super(bdusuario, bdpwd, usuario, pass)
    };

    set NombreUsuario(nombre) {
        this.usuario = nombre
    };

    get NombreUsuario() {
        return this.usuario;
    };
};


function login() {
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    let NuevoUsuario = new usuario('Jeffer', 'tres', user, pwd)
    NuevoUsuario.validar()
}
