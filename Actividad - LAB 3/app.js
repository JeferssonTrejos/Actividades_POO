const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes')

const app = express();
const PORT = 5000;
const MONGO_DB_URL = "mongodb://localhost:27017/dbvivienda";

app.use(bodyparser.json())
app.use(cors())
app.use('/api/vivienda', routes);
app.use('/home/',express.static('public'))


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// Mongo DB Conexion
mongoose.connect(MONGO_DB_URL, {
}).then(response => {
    console.log('conexión exitosa con MongoDB.')
}).catch(error => {
    console.log('Error in DB connection: ' + error)
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}/api/vivianda`);
})

