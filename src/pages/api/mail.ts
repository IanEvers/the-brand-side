import type { APIRoute } from "astro";
import nodemailer from 'nodemailer'

export const post: APIRoute = async ({ request }) => {

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'no-reply@thevirtualside.com',
      pass: 'dggnmbhsfalclwvh',
    },
    secure: true,
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Contacto " <contact@example.com>', // sender address
    to: "contacto@thebrandside.com", // list of receivers
    subject: "Mensaje de " , // Subject line
    text: "", // plain text body
    html: "<b></b>", // html body
  }).catch((error) => console.log(error));

  return {
    body: JSON.stringify({
      message: 'mensaje'
    })
  }
};