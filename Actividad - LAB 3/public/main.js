function GetAllData() {
    const allDataContainer = document.getElementById('allDataContainer');
    const options = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify() 
    };
    // Realizar la solicitud fetch
    fetch(`http://localhost:5000/api/vivienda/`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(data => {
            console.log(data);
            data.forEach((e) => {
                console.log(e);
                let dat = `
                <label for="">Representante: </label>
                <span>${e.representante}</span>

                <label for="">nombre: </label>
                <span>${e.nombre}</span>
        
                <label for="">habitantes: </label>
                <span>${e.habitantes}</span>
        
                <label for="">Direccion:</label>
                <div class="direccion">
                    <label for="">colonia: </label>
                    <span>${e.direccion.colonia}</span><br>
        
                    <label for="">referencia: </label>
                    <span>${e.direccion.referencia}</span><br>
        
                    <label for="">numero: </label>
                    <span>${e.direccion.numero}</span><br>
                </div>
        
                <label for="">salariopromedio: </label>
                <span>${e.salariopromedio}</span>
                <hr>
                <br>
                `;
                allDataContainer.insertAdjacentHTML('beforeend', dat)
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function EnviarData() {
    const representante = document.getElementById('representante');
    const nombre = document.getElementById('nombre');
    const habitantes = document.getElementById('habitantes');
    const colonia = document.getElementById('colonia');
    const referencia = document.getElementById('referencia');
    const numero = document.getElementById('numero');
    const salariopromedio = document.getElementById('salariopromedio');

    const data = {
        "representante": representante.value,
        "nombre": nombre.value,
        "habitantes": habitantes.value,
        "direccion": {
            "colonia": colonia.value,
            "referencia": referencia.value,
            "numero": numero.value
        },
        "salariopromedio": salariopromedio.value,
    };

    // Opciones de la solicitud fetch
    const options = {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify(data) // Cuerpo de la solicitud
    };
    // Realizar la solicitud fetch
    fetch('http://localhost:5000/api/vivienda/', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(data => {
            console.log('Éxito:', data);
            location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function DeleteData() {
    const idDelete = document.getElementById('idDelete');
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify()
    };
    // Realizar la solicitud fetch
    fetch(`http://localhost:5000/api/vivienda/:id?id=${idDelete.value}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(data => {
            console.log('Éxito:', data);
            location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function GetData() {
    const representante = document.getElementById('representante0');
    const nombre = document.getElementById('nombre0');
    const habitantes = document.getElementById('habitantes0');
    const colonia = document.getElementById('colonia0');
    const referencia = document.getElementById('referencia0');
    const numero = document.getElementById('numero0');
    const salariopromedio = document.getElementById('salariopromedio0');

    const idVivienda = document.getElementById('idVivienda');

    const idUpdate = document.getElementById('idUpdate');

    const options = {
        method: 'GET', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify() // Cuerpo de la solicitud
    };
    // Realizar la solicitud fetch
    fetch(`http://localhost:5000/api/vivienda/:id?id=${idUpdate.value}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(data => {
            console.log('Éxito:', data);

            idVivienda.value = data._id
            representante.value = data.representante
            nombre.value = data.nombre
            habitantes.value = data.habitantes
            colonia.value = data.direccion.colonia
            referencia.value = data.direccion.referencia
            numero.value = data.direccion.numero
            salariopromedio.value = data.salariopromedio

        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function UpdateData() {
    const idVivienda = document.getElementById('idVivienda');

    const representante = document.getElementById('representante0');
    const nombre = document.getElementById('nombre0');
    const habitantes = document.getElementById('habitantes0');
    const colonia = document.getElementById('colonia0');
    const referencia = document.getElementById('referencia0');
    const numero = document.getElementById('numero0');
    const salariopromedio = document.getElementById('salariopromedio0');

    const data = {
        "representante": representante.value,
        "nombre": nombre.value,
        "habitantes": habitantes.value,
        "direccion": {
            "colonia": colonia.value,
            "referencia": referencia.value,
            "numero": numero.value
        },
        "salariopromedio": salariopromedio.value,
    };
    // console.log(data);

    const options = {
        method: 'PUT', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify(data) // Cuerpo de la solicitud
    };
    // Realizar la solicitud fetch
    // 66493f6fd5a458e63740a02f
    fetch(`http://localhost:5000/api/vivienda/:id?id=${idVivienda.value}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(data => {
            console.log('Éxito:', data);
            idVivienda.value = ''
            representante.value = ''
            nombre.value = ''
            habitantes.value = ''
            colonia.value = ''
            referencia.value = ''
            numero.value = ''
            salariopromedio.value = ''
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// SEND
const form = document.getElementById('miFormulario');
form.addEventListener('submit', async (event) => {
    event.preventDefault()
    EnviarData()
});

// DELETE
const formDelete = document.getElementById('formDelete');
formDelete.addEventListener('submit', async (event) => {
    event.preventDefault()
    DeleteData()
});

// get data by id
const formGetData = document.getElementById('formGetData');
formGetData.addEventListener('submit', async (event) => {
    event.preventDefault()
    GetData()
});

// UPDATE
const formUpdate = document.getElementById('formUpdate');
formUpdate.addEventListener('submit', async (event) => {
    event.preventDefault()
    UpdateData()
});

// GET ALL
const btnGet = document.getElementById('btnGet');
btnGet.addEventListener('click', async (event) => {
    GetAllData()
});
