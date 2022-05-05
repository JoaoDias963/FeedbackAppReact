import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0fb6880ac555fa",
        pass: "1317a00021a146"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Joao <batata@gmail.com', //em producao este é o email que será enviado
            subject,
            html: body,
        });
    };
}