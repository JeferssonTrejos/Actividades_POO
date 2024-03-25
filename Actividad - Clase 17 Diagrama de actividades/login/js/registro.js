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

let nombre = document.getElementById('nombre')
let fechanacimiento = document.getElementById('fechanacimiento')
let genero = document.getElementById('genero')
let departamento = document.getElementById('departamento')
let ciudad = document.getElementById('ciudad')
let numero = document.getElementById('numero')
let descripcion = document.getElementById('descripcion')

function registrar() {

    alertify.success('Datos registrados');
    let Url = `./usuario.html?nombre=${encodeURIComponent(nombre.value)}
               &fecha=${encodeURIComponent(fechanacimiento.value)}
               &genero=${encodeURIComponent(genero.value)}
               &departamento=${encodeURIComponent(departamento.value)}
               &ciudad=${encodeURIComponent(ciudad.value)}
               &numero=${encodeURIComponent(numero.value)}
               &descripcion=${encodeURIComponent(descripcion.value)}            
    `;

    setTimeout(e => { window.location.href = Url }, 2000);
}

let url = new URL(window.location.href);

nombre.value = url.searchParams.get("nombre");
fechanacimiento.value = url.searchParams.get("fecha");
genero.value = url.searchParams.get("genero");
departamento.value = url.searchParams.get("departamento");
ciudad.value = url.searchParams.get("ciudad");
numero.value = url.searchParams.get("numero");
descripcion.value = url.searchParams.get("descripcion");