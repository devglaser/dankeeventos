import Head from "next/head";
import Link from "next/link";

import {useState, useEffect} from 'react'

import styled from "styled-components";

const ContatoMain = styled.main`
    display: flex; align-items: center; justify-content: center; flex-direction: column;
    margin-top:95px;
    height: calc(100vh - 95px);min-height: calc(100vh - 95px); 
    background: linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .1), rgba(46, 26, 71, 1));

    @media (max-width:700px){
        margin-top:75px;
        height: calc(100vh - 75px);min-height: calc(100vh - 75px);
    }
`

const Formulario = styled.form`
    width:100%;max-width: 490px;
    display: grid; place-items: center;
`

const InputForm = styled.input`
    background: transparent;
    padding: 15px 25px;
    border: 3px solid #E5E1E6;
    width: 100%;max-width: 490px;
    max-height:45px;

    &:nth-child(2){
        margin: 15px 0;
    }
`

const TextArea = styled.textarea`
    background: transparent;
    padding: 13px 25px;
    border: 3px solid #E5E1E6;
    min-width: 100%;max-width: 490px;
    max-height:70px;min-height:70px;
`

const ButtonForm = ({text = 'Enviar Mensagem'}) => <input type="submit" value={text} className="botaoAcao" style={{marginTop: '25px'}}/>

const InputTextEmail= ({place = 'Infome seu nome', type = 'text'}) => <InputForm placeholder={place} type={type} required/>

const Contato = () => {

    const [currentLanguage, setCurrentLanguage] = useState('ptbr')

    const textsLangs = {
        title:{
            ptbr:'Contate-nos',
            usa: 'Contact us',
            es: 'Contáctenos'
        },
        caption:{
            ptbr:'sinta-se à vontade para entrar em contato conosco e retornaremos o mais breve possível',
            usa: 'Please feel free to contact us and we will get back to you as soon as possible.',
            es: 'No dude en ponerse en contacto con nosotros y nos pondremos en contacto con usted lo antes posible.'
        },
        placeHolderName:{
            ptbr:'Seu nome ou de sua empresa',
            usa: 'Your name or your company',
            es: 'Su nombre o su empresa'
        },
        placeholderMail:{
            ptbr:'Seu endereço de e-mail',
            usa: 'Your email address',
            es: 'Su dirección de correo electrónico'
        },
        placeholderTextArea:{
            ptbr:'Escreva sua mensagem',
            usa: 'Write your message',
            es: 'escribe tu mensaje'
        },
        button:{
            ptbr:'Enviar Mensagem',
            usa: 'Send Message',
            es: 'Enviar mensaje'
        },
    }

    useEffect(()=>{
        ;(()=>{
          try {
            if(localStorage.getItem('dankeLanguage') != null || localStorage.getItem('dankeLanguage') != undefined) {
              setCurrentLanguage(localStorage.getItem('dankeLanguage'))
            }else{
                setCurrentLanguage('ptbr')
            }
          } catch (error) {
            console.log(error)
          }
        })()
      },[])

    return (
        <>
            <Head>
                <title>{textsLangs.title[currentLanguage]}</title>
            
                <link rel="icon" href="/Imgs/logoDankeAntiga.png" />
                <link rel="canonical" href="https://dankeeventos.com.br/contato"/>

                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Danke Eventos"/>
                <meta name="description" content="Entre em contato conosco e experimente o atendimento excepcional da Danke Eventos. Estamos prontos para ouvir suas necessidades e responder às suas perguntas. Sinta-se à vontade para nos contatar e tenha a garantia de um retorno rápido e eficiente."/>
                <meta name="keywords" content="eventos, festas, organização de eventos, serviços de eventos, equipe experiente, momentos inesquecíveis"/>
                
                <meta property="og:title" content={textsLangs.title[currentLanguage]}/>
                <meta property="og:description" content="Entre em contato conosco e experimente o atendimento excepcional da Danke Eventos. Estamos prontos para ouvir suas necessidades e responder às suas perguntas. Sinta-se à vontade para nos contatar e tenha a garantia de um retorno rápido e eficiente."/>
                <meta property="og:url" content="https://dankeeventos.com.br/contato"/>
                <meta property="og:image" content="https://dankeeventos.vercel.app/Imgs/logoDankeAntiga.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Danke Eventos"/>
            </Head>
            <ContatoMain className='autoPadding'>
                
                <h1 className='titulo'>{textsLangs.title[currentLanguage]}</h1> 
                
                <p style={{maxWidth: '375px', textAlign: 'center', margin: '25px 0 50px 0'}}>{textsLangs.caption[currentLanguage]}</p>
                
                <Formulario method="post">
                    <InputTextEmail place={textsLangs.placeHolderName[currentLanguage]}/>
                    <InputTextEmail place={textsLangs.placeholderMail[currentLanguage]} type={'email'} style={{margin: '15px 0'}}/>
                    <TextArea placeholder={textsLangs.placeholderTextArea[currentLanguage]}/>
                    <ButtonForm text={textsLangs.button[currentLanguage]}/>
                </Formulario>
                
                <p style={{marginTop: '50px',fontWeight: '700', textAlign: 'center', width: '100%',maxWidth: '425px'}}>
                    <Link href="https://wa.me/5521993401594" style={{marginRight: "15px"}}>+55 21 9 9340-1594</Link> <Link href='mailto:contato@dankeeventos.com.br' target="_blank">contanto@dankeeventos.com.br</Link>
                </p>
            </ContatoMain>
        </>
    );
}

export default Contato;