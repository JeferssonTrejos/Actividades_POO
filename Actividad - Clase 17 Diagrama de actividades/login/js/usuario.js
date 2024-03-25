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

let url = new URL(window.location.href);

let nombre = url.searchParams.get("nombre");
let fecha = url.searchParams.get("fecha");
let genero = url.searchParams.get("genero");
let departamento = url.searchParams.get("departamento");
let ciudad = url.searchParams.get("ciudad");
let numero = url.searchParams.get("numero");
let descripcion = url.searchParams.get("descripcion");

const PerfilUsuario = new Perfil(nombre, fecha, genero, departamento, ciudad, numero, descripcion);
PerfilUsuario.asignar()

function editar() {
    let Url = `
    ./registro.html?nombre=${encodeURIComponent(nombre)}
    &fecha=${encodeURIComponent(fecha)}
    &genero=${encodeURIComponent(genero)}
    &departamento=${encodeURIComponent(departamento)}
    &ciudad=${encodeURIComponent(ciudad)}
    &numero=${encodeURIComponent(numero)}
    &descripcion=${encodeURIComponent(descripcion)}            
`;

    window.location.href = Url;
}