class usuario {
    constructor(nombre, fechanacimiento, genero, departamento, ciudad, numero, descripcion) {
        this.nombre = nombre;
        this.fechanacimiento = fechanacimiento;
        this.genero = genero;
        this.departamento = departamento;
        this.ciudad = ciudad;
        this.numero = numero;
        this.descripcion = descripcion;
    };
};


class Registrar extends usuario {
    constructor(nombre, fechanacimiento, genero, departamento, ciudad, numero, descripcion) {
        super(nombre, fechanacimiento, genero, departamento, ciudad, numero, descripcion)
    };

    saveinfo() {
        localStorage.setItem("nombre", this.nombre);
        localStorage.setItem("fechanacimiento", this.fechanacimiento);
        localStorage.setItem("genero", this.genero);
        localStorage.setItem("departamento", this.departamento);
        localStorage.setItem("ciudad", this.ciudad);
        localStorage.setItem("numero", this.numero);
        localStorage.setItem("descripcion", this.descripcion);
    };

};


function registrar() {
    let nombre = document.getElementById('nombre').value
    let fechanacimiento = document.getElementById('fechanacimiento').value
    let genero = document.getElementById('genero').value
    let departamento = document.getElementById('departamento').value
    let ciudad = document.getElementById('ciudad').value
    let numero = document.getElementById('numero').value
    let descripcion = document.getElementById('descripcion').value

    let registrar = new Registrar(nombre, fechanacimiento, genero, departamento, ciudad, numero, descripcion)
    registrar.saveinfo();

    alertify.success('Datos registrados');
    setTimeout(e =>{window.location.href = './usuario.html';}, 2000);
}

