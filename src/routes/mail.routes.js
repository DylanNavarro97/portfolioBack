import { Router } from "express";
import { enviarMail } from "../controllers/mail.controllers.js";

const router = Router()

router.route("/mail").get(enviarMail)

export default router