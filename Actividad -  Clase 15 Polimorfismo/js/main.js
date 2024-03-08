class Computadora {
    constructor(nombre, dueño) {
        this.nombre = nombre;
        this.dueño = dueño;
    };
};


class PcPruebas extends Computadora{
    constructor(nombre, dueño, sistema, uso){
        super(nombre, dueño);
        this.sistema = sistema;
        this.uso = uso;
    };

    Estadisticas(){
        return console.log(`La pc ${this.nombre} de ${this.dueño} tiene un sistema ${this.sistema} y es usada para ${this.uso}`);
    }
};

class PcTrabajo extends Computadora{
    constructor(nombre, dueño, sistema, uso){
        super(nombre, dueño);
        this.sistema = sistema;
        this.uso = uso;
    };
    Estadisticas(){
        return console.log(`La pc ${this.nombre} de ${this.dueño} tiene un sistema ${this.sistema} y es usada para ${this.uso}`);
    }
};


class PcDiario extends Computadora{
    constructor(nombre, dueño, sistema, uso){
        super(nombre, dueño);
        this.sistema = sistema;
        this.uso = uso;
    };

    Estadisticas(){
        return console.log(`La pc ${this.nombre} de ${this.dueño} tiene un sistema ${this.sistema} y es usada para ${this.uso}`);
    }
};


let pcPruebas = new PcPruebas('Lenovo Ideapad 110','Daniela','Ubuntu','Testear nuevos programas');
let pcTrabajo = new PcTrabajo('Asus Vivobook S15','Pablo','Fedora','Programar algoritmos');
let pcDiario = new PcDiario('Lenovo Thinkpad E15','jenifer','Windows','Ofimatica y redes sociales');

pcPruebas.Estadisticas();
pcTrabajo.Estadisticas();
pcDiario.Estadisticas();