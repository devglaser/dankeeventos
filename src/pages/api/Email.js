require('dotenv').config()
const nodemailer = require('nodemailer');

const Form = (req, res) => {

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD,
      }
    });
  
    const mailData = {
      from: process.env.USER_EMAIL,
      to: process.env.USER_EMAIL,
      subject: `Mensagem de ${req.body.name}`,
      text: req.body.mensagem,
      html: `<main>${req.body.mensagem} <br/> <p>E-mail de contato: ${req.body.email}</p> </main>`
    }
  
    transporter.sendMail(mailData, (error, info)=>{
      error ? console.log(error) : console.log(info)
    })
  
    res.status(200)
    res.send()
  } catch (error) {
    
  }

  console.log(req.body)
}

export default Form;