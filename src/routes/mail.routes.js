import { Router } from "express";
import { enviarMail } from "../controllers/mail.controllers.js";
import validacionMail from "../helpers/validacionMail.js";

const router = Router()

router.route("/mail").post([validacionMail], enviarMail)

export default router