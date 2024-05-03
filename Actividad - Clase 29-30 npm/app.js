const express = require('express');
const app = express();
const port = 3000;
const { enviar } = require('./src/index.js');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');

});

app.get('/send-email', async (req, res) => {
    const remitente = req.query.remitente;
    const destinatario = req.query.destinatario;
    const asunto = req.query.asunto;
    const cuerpo = req.query.cuerpo;

    try {
        const result = await enviar(remitente, destinatario, asunto, cuerpo);
        console.log(result)

        res.sendFile(__dirname + '/src/redirect.html');
        
    } catch (error) {
        res.send('Error no enviado', error)
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${port}`);
});
