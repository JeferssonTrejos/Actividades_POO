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

class Perfil extends usuario {
    constructor(nombre, fechanacimiento, genero, departamento, ciudad, numero, descripcion) {
        super(nombre, fechanacimiento, genero, departamento, ciudad, numero, descripcion)
    };
    asignar() {
        document.getElementById('nombrelb').innerHTML = this.nombre;
        document.getElementById('fechanacimientolb').innerHTML = this.fechanacimiento;
        document.getElementById('generolb').innerHTML = this.genero;
        document.getElementById('departamentolb').innerHTML = this.departamento;
        document.getElementById('ciudadlb').innerHTML = this.ciudad;
        document.getElementById('numerolb').innerHTML = this.numero;
        document.getElementById('descripcionlb').innerHTML = this.descripcion;
    };

};


const PerfilUsuario = new Perfil(
    localStorage.getItem("nombre"),
    localStorage.getItem("fechanacimiento"),
    localStorage.getItem("genero"),
    localStorage.getItem("departamento"),
    localStorage.getItem("ciudad"),
    localStorage.getItem("numero"),
    localStorage.getItem("descripcion")
);

PerfilUsuario.asignar()