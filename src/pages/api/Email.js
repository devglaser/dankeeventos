require('dotenv').config()
const nodemailer = require('nodemailer');

const Form = (req, res) => {

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'seusite.noreply@gmail.com',
        pass: 'hsgihamnjmdgjcba',
      }
    });
  
    const mailData = {
      from: 'seusite.noreply@gmail.com',
      to: 'seusite.noreply@gmail.com',
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