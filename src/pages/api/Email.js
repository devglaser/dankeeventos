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
      html: `
      <div id="email" style="width: 100%;background: linear-gradient(180deg, #612651, #2e1a47) no-repeat;padding: 50px;color:#fff;">
        <h1 style="margin-bottom: 25px;font-size: 2.625rem;font-weight: 700;">${req.body.name}</h1>
        <h2 style="font-size: 1.625rem;font-weight: 500;">Enviou um email para <br/>você através de seu site</h2>
        <p style="width: 100%;max-width: 400px;margin: 50px 0;"><b>Mensagem:</b> ${req.body.mensagem}</p>
        <a href="mailto:${req.body.email}" style="display: grid;place-items: center;text-align:center;width: 275px;height: 50px;background: #fff;color: #2e1a47;text-decoration: none !important;font-size: 1.25rem;text-transform: uppercase;font-weight: 700;line-height:50px;">Responder e-mail</a>
        <p style="margin: 15px 0;">Informações de contato</p>
        <p style="font-weight: 500; color: #fff !important; text-decoration: none !important;">Nome: ${req.body.name} | E-mail: ${req.body.email}</p>
      </div>
      `
    }

    const notifyMyMail = {
      from: 'seusite.noreply@gmail.com',
      to: 'devdanielglaser@gmail.com',
      subject: `Um email foi enviado no site Danke Eventos`,
      text: 'Se você recebeu essa mensagem quer dizer que esta tudo acontecendo corretamente.',
      html: `
        <div style="font-family:"Montserrat",sans-serif;padding:50px;background:#111111;color:#ffffff;">
          <h1 style="font-size: 2.625rem;margin-bottom:15px;">Danke Eventos Recebeu um e-mail</h1>
          <h2 style="font-size: 1.625rem;margin-bottom:15px;">Informações deste e-mail logo abaixo</h2>
          <h3 style="font-size: 1.25rem;margin-bottom:15px;">Nome: ${req.body.name}</h3>
          <h4 style="margin-bottom:15px;max-width:475px;">Mensagem: ${req.body.mensagem}</h4>
          <h4>E-mail: ${req.body.email}</h4>
        </div>
      `
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
  
    await new Promise((resolve, reject)=>{
      transporter.sendMail(notifyMyMail, (error, info)=>{
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
    alert(error)
    res.status(400)
  }
}

export default Form;