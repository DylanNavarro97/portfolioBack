import nodemailer from 'nodemailer'
import 'dotenv/config'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "dylanrubennavarro@gmail.com",
      pass: process.env.adminAPIPass,
    },
  });

  transporter.verify().then(() => {
    console.log("ready for send emails")
  })