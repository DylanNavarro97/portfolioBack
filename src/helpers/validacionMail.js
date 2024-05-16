import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionMail = [
    check("nombre")
    .notEmpty()
    .withMessage("El nombre es un dato obligatorio.")
    .isLength({
        min: 2,
        max: 50
    })
    .withMessage("El nombre debe contener entre 2 y 50 caracteres.") ,
    check("remitente")
    .notEmpty()
    .withMessage("El mail del remitente es un dato obligatorio.")
    .isEmail()
    .withMessage("El remitente debe ser una dirección de correo electrónico válida.")
    .isLength({
        min: 2,
        max: 50,
    })
    .withMessage("El mail del remitente debe estar entre 2 y 80 caracteres"),
    check("asunto")
    .notEmpty()
    .withMessage("El asunto es un dato obligatorio.")
    .isLength({
        min: 2,
        max: 50
    })
    .withMessage("El asunto debe contener entre 2 y 100 caracteres."),
    check("mensaje")
    .notEmpty()
    .withMessage("El mensaje es un dato obligatorio.")
    .isLength({
        min: 2,
        max: 500
    })
    .withMessage("El mensaje debe contener entre 2 y 500 caracteres."),

    (req, res, next) => {
        resultadoValidacion(req, res, next)
    }
]

export default validacionMail;