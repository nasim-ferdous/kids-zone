import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // The method is actually .sendMail
  const info = await transporter.sendMail({
    from: `"Kids Zone" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });

  return info;
};
