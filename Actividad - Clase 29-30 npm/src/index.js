const nodemailer = require('nodemailer');

class Email {
    constructor() {
        this.transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "jeffersonbladimirlovo@gmail.com",
                pass: "kodb llnh olrf rkhi",
            }
        });
    }

    async enviar(emailData) {
        const send = await this.transport.sendMail({
            from: emailData['de'],
            to: emailData['para'],
            subject: emailData['asunto'],
            text: emailData['cuerpo']
        });

        return send;
    }
}

const email = new Email();

async function enviar(remitente, destinatario, asunto, cuerpo) {
    const emailData = {
        'de': remitente,
        'para': destinatario,
        'asunto': asunto,
        'cuerpo': cuerpo,
    };

    let send = await email.enviar(emailData);

    return send;
}

// enviar(
//     'jeffersonbladimirlovo@gmail.com',
//     'yosoyjbl@gmail.com',
//     'HOLA',
//     'hola mundo'
// )

module.exports = {
    enviar: enviar, // Especifica las funciones que quieres exportar
};