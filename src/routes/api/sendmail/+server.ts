import nodemailer from 'nodemailer';
import {env} from "$env/dynamic/private";


export async function POST(event: Event) {
    try {
        const body = await event.request.json();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: 'leo.fezard33@gmail.com',
            to: 'leo.fezard33@gmail.com',
            subject: 'Demande de contact',
            text: `
Email : ${body.Email},
Nom : ${body.Nom}
Prénom : ${body.Prénom}
Message : 

${body.Message}`,
        };

        const info = await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), {
            headers: {
                'Content-Type': 'application/json'
            },
        })
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        return new Response(JSON.stringify({ success: false }), {
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}