import  nodemailer  from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "33f97c5ace2cc5",
      pass: "effc4f2bacff34"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Ivan Vidal <ivanvidal.dev@gmail.com>',
            subject,
            html: body
        })
    };
}