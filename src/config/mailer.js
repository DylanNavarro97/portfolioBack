import nodemailer from 'nodemailer'
import 'dotenv/config'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.mail,
      pass: process.env.adminAPIPass,
    },
  });

  transporter.verify().then(() => {
    console.log("ready for send emails")
  })