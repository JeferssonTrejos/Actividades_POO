//Clase con las opciones del menu
class GestionMenu {
    constructor(menu) {
        this.menu = menu;
    };
};

//Clase para hacer el pedido
class GestionPedido extends GestionMenu {
    constructor(nombre, menu, productos, cantidad) {
        super(menu);
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.productos = productos;
    };
    //Hacemos el pedido
    HacerPedido() {
        //añadimos a una lista el pedido
        let lista = '';
        this.productos.forEach((checkbox, i) => {
            if (checkbox.checked && this.cantidad[i].value != 0) {
                let producto = this.menu[i]
                let cantidad = this.cantidad[i].value;
                lista += `${cantidad} ${producto} + `
            };
        });
        lista = lista.slice(0, -2);

        //mandamos a mostrarlo
        if (lista != '') {
            this.MostrarPedido(lista);
        } else {
            alert('Seleciona algo del menu');
        };
    };

    //Mostramos el pedido al usuario y lo mandamos a la cocina
    MostrarPedido(lista) {
        let pedido = document.getElementById('pedidos');
        let MensajePedido = `
        <div class="producto pedido">
            <div>
                <h5>${this.nombre} tu pedido esta en cola</h5>
                    <p>${lista}</p>
                </div>
                <h4 id="EstadoPedido">En cocina</h4>
            </div>
        `;
        pedido.innerHTML = MensajePedido;

        //mandando a la cocina
        let orden = new GestionCocina(lista, this.nombre);
        orden.EstadoPedido();
    };
};
//clase que prepara el pedido
class GestionCocina extends GestionPedido {
    constructor(lista, nombre) {
        super(nombre)
        this.lista = lista;
    };

    EstadoPedido() {
        let nombre = this.nombre;
        let lista = this.lista;

        //mostramos el pedido en la cocina y su estado
        let pedido = document.getElementById('PedidoCocina');
        let Orden = `
        <div class="producto pedido">
            <div>
                <h5>Pedido de ${this.nombre}</h5>
            <p>${this.lista}</p>
            </div>
            <h4 id="EstadoCocina">Preparando 1%</h4>
        </div>
        `;
        pedido.innerHTML = Orden;

        //Actualiza el estado del pedido
        function ActualizarEstados() {
            document.getElementById('EstadoCocina').innerHTML = 'Listo';
            document.getElementById('EstadoCocina').style.backgroundColor = 'rgba(0, 128, 0, 0.7)';

            document.getElementById('EstadoPedido').innerHTML = 'Listo';
            document.getElementById('EstadoPedido').style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
        }

        //Porcentaje de preparado/cocinado
        let porcentaje = 0;
        function PorcentajePedido() {
            if (porcentaje < 100) {
                porcentaje += 4;
                setTimeout(PorcentajePedido, 300);
                document.getElementById('EstadoCocina').innerHTML = `Preparando ${porcentaje}%`
            } else {
                ActualizarEstados();
                alert(`${nombre} tu pedido de ${lista} ya esta listo`);
            };
        };
        PorcentajePedido();
    };
};

//Lista del menu
let menu = ['Hamburguesas con papas', 'Tacos de Birria', 'Nachos', 'Pepsi'];

function Ordenar() {
    let Productos = document.getElementsByName('comida');
    let Cantidad = document.getElementsByName('cantidad');
    let NombreUsuario = document.getElementById('nombre').value;

    let pedido = new GestionPedido(NombreUsuario, menu, Productos, Cantidad);
    pedido.HacerPedido();
};