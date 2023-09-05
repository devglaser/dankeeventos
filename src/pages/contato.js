import Head from "next/head";
import Link from "next/link";

import {useState, useEffect,} from 'react'

import styled from "styled-components";

import { Montserrat } from 'next/font/google'

import contato from '../styles/contato/contato.module.css'
import Loading from "./Components/Loading/Loading";

const montserrat = Montserrat({subsets:['latin']})

const ContatoMain = styled.main`
    display: flex; align-items: center; justify-content: center; flex-direction: column;
    padding-top:125px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .1), rgba(46, 26, 71, 1));

    @media (max-width:700px){
        padding-top:75px;
        height: 812px;
    }
`

const Contato = () => {

    const [currentLanguage, setCurrentLanguage] = useState('ptbr')

    const textsLangs = {
        title:{
            ptbr:'Vamos Conversar!',
            usa: 'Vamos Conversar!',
            es: '¡Vamos a hablar!'
        },
        placeHolderName:{
            ptbr:'Seu nome',
            usa: 'Your name',
            es: 'Su nombre'
        },
        placeholderMail:{
            ptbr:'Seu e-mail',
            usa: 'Your email ',
            es: 'Su correo electrónico'
        },
        placeholderTextArea:{
            ptbr:'Me fale sobre o seu evento',
            usa: 'Tell me about your event',
            es: 'Cuéntame sobre tu evento'
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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [validInfos, setValidInfos] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    
    const [loadSend, setLoadSend] = useState(false)
    const [errorSend, setErrorSend] = useState(false)
    const [sucessSend, setSucessSend] = useState(false)

    const handleSubmit = (e) => {
        setValidInfos(false)
        e.preventDefault()
        
        const data = {name,email,mensagem}

        if(name.length > 3 || email.length > 10 || mensagem.length > 20){
            setSucessSend(false)
            setErrorSend(false) 
            setLoadSend(true)
            
            try{
                fetch('./api/Email', {
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((res)=>{
                    if (res.status === 200){
                        
                        setSubmitted(true)
                        setName('')
                        setEmail('')
                        setMensagem('')

                        setSucessSend(true)
                        setLoadSend(false)
                    }else{
                        setErrorSend(true)
                    }
                })
            }catch(e){
                console.log(e)
            }
        }else{setValidInfos(true)}
    }

    return (
        <>
            <Head>
                <title>{textsLangs.title[currentLanguage]}</title>
            
                <link rel="icon" href="/Imgs/dankeD.svg" />
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
            <ContatoMain className={`autoPadding gradientBackPage ${montserrat.className}`}>
                
                <h1 className='titulo' style={{marginBottom: '50px'}}>{textsLangs.title[currentLanguage]}</h1>
                
                <form action="" method="post" id={contato.formulario}>
                    <input placeholder={textsLangs.placeHolderName[currentLanguage]} value={name} onChange={({target}) => setName(target.value)} type="text" required minLength={5}/>
                    <input placeholder={textsLangs.placeholderMail[currentLanguage]} value={email} onChange={({target}) => setEmail(target.value)} type={"email"} required minLength={10}/>
                    <textarea placeholder={textsLangs.placeholderTextArea[currentLanguage]} value={mensagem} required minLength={10} onChange={({target}) => setMensagem(target.value)} className={montserrat.className}/>
                    
                    {!loadSend && <input type="submit" value={textsLangs.button[currentLanguage]} className="botaoAcao" style={{marginTop: '25px'}} onClick={(e)=>handleSubmit(e)}/>}
                    
                    {loadSend && <p style={{marginTop:'25px', fontWeight: 'bold'}}>Aguarde, estamos enviando sua mensagem...</p>}
                    {loadSend && <Loading/>}

                    {errorSend && <p style={{marginTop:'25px', fontWeight: 'bold', textAlign: 'center', maxWidth: '400px'}}>Algo deu errado ao enviar sua mensagem, tente novamente.</p>}

                    {sucessSend && <p style={{marginTop:'25px', fontWeight: 'bold', textAlign: 'center', maxWidth: '400px'}}>Mensagem enviada com sucesso!</p>}

                    {validInfos && <p style={{marginTop:'25px', fontWeight: 'bold', textAlign: 'center', maxWidth: '400px'}}>Preencha todos os campos.</p>}
                </form>
                
                <p style={{marginTop: '50px',fontWeight: '700', textAlign: 'center', width: '100%',maxWidth: '430px'}}>
                    <Link href="https://wa.me/5521993401594" style={{marginRight: "15px"}}>+55 21 9 9340-1594</Link> <Link href='mailto:contato@dankeeventos.com.br' target="_blank">contanto@dankeeventos.com.br</Link>
                </p>
            </ContatoMain>
        </>
    );
}

export default Contato;