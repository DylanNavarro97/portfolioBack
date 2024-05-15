import { transporter } from "../config/mailer.js"
import 'dotenv/config'

export const enviarMail = async (req, res) => {
    try {
        const {nombre, remitente, asunto, mensaje} = req.body
        await transporter.sendMail({
            from: `${nombre}`,
            to: process.env.mail,
            subject: asunto,
            text: `De: ${remitente}\n ${mensaje}`, 
          });
          res.status(200).json({mensaje: "Se envió el mail correctamente."})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: "No se realizó el envío del email."})
    }
}