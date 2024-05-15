import { transporter } from "../config/mailer.js"

export const enviarMail = async (req, res) => {
    try {
        const {remitente, asunto, mensaje} = req.body
        await transporter.sendMail({
            from: remitente,
            to: "dylanrubennavarro@gmail.com",
            subject: asunto,
            text: mensaje, 
          });
        
          console.log("Message sent: eo");
          res.status(200).json({mensaje: "Se envio el mail correctamente"})
    } catch (error) {
        console.log(error)
        res.status(400).json({mensaje: "No hubo mail"})
    }
}