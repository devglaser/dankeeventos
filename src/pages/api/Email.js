require('dotenv').config()
const nodemailer = require('nodemailer');

const Form = async (req, res) => {

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      service: 'gmail',
      auth: {
        user: 'seusite.noreply@gmail.com',
        pass: 'hsgihamnjmdgjcba',
      },
      secure: true
    });

    await new Promise((resolve, reject)=>{
      transporter.verify((error, seccess)=>{
        if(error){
          console.log(error)
          reject(error)
        }else{
          console.log(seccess)
          resolve(seccess)
        }
      })
    })
  
    const mailData = {
      from: 'seusite.noreply@gmail.com',
      to: 'seusite.noreply@gmail.com',
      subject: `Mensagem de ${req.body.name}`,
      text: req.body.mensagem,
      html: `<main>${req.body.mensagem} <br/> <p>E-mail de contato: ${req.body.email}</p> </main>`
    }
  
    await new Promise((resolve, reject)=>{
      transporter.sendMail(mailData, (error, info)=>{
        if(error){
          console.log(error)
          reject(error)
        }else{
          console.log(info)
          resolve(info)
        }
      })
    })
  
    res.status(200)
    res.send()
  } catch (error) {
    
  }

  console.log(req.body)
}

export default Form;