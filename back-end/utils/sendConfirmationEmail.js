const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendConfirmationEmail(email, confirmationLink) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail(
    {
      from: process.env.EMAIL_USER, // sender address
      to: email, // list of receivers
      subject: 'Confirm Your Email Address',
      html: `
      <p>Please click the following link to confirm your email address:</p>
      <p><a href="${confirmationLink}">${confirmationLink}</a></p>
    `,
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }
  );

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = sendConfirmationEmail;
