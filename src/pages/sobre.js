import Head from "next/head";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";

import {useState, useEffect} from 'react'

import styled from "styled-components";

import ImagemSobre from '../../public/Imgs/k.jpg'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets:['latin']})

const SobreDanke = styled.section`
    padding-top: 125px;
    display: flex;align-items:center;justify-content: space-between;

    @media (max-width:1080px){
        margin-top:75px;
        flex-direction: column-reverse;

        div:nth-child(1){
            margin-top: 25px;
        }
    }
`

const TituloDanke = styled.h1`
    font-size: 4.25rem;
    max-width: 920px;

    @media (max-width: 700px){font-size:2.125rem;max-width:480px}
`

const Servico = styled.section`
    display: flex;align-items:center;justify-content: space-between;

    @media (max-width:1280px){
    flex-direction: column; 

        div:nth-child(1){
            margin-bottom: 25px;
        }
    }
`

const Sobre = () => {

    const [currentLanguage, setCurrentLanguage] = useState('ptbr')

    const textsLangs = {
        title: {
            ptbr: 'Sobre a Empresa | Danke Eventos',
            usa: 'About the company | Danke Events',
            es: 'Sobre la empresa | Danke Eventos'
        },
        aboutSection: {
            title: {
                ptbr:'Danke Eventos',
                usa: 'Danke Events',
                es: 'Danke Eventos'
            },
            caption:{
                ptbr: 'Mais de 20 anos de experiência',
                usa: 'More than 20 years of experience',
                es: 'Más de 20 años de experiencia',
            },
            texts: {
                ptbr:`
                Com mais de 20 anos de história, a Danke já realizou centenas de eventos sociais
                e corporativos, de mini weddings a convenções de grande porte para
                multinacionais.
                Ao longo de nossa trajetória sedimentamos uma parceria especial com os
                melhores fornecedores e locações do Rio de Janeiro, oferecendo aos nossos
                clientes o mais alto nível de profissionalismo em todas os serviços necessários
                para a realização de um evento.
                Acreditamos que eventos devem conectar pessoas, e que pessoas se conectam
                através de experiências.                
                `,
                usa: 'Our events company has 20 years of experience in transforming celebrations into unforgettable moments. With a dedicated team and personalized services, we take care of every detail of your event, from planning to execution. We offer solutions for different types of events, always attentive to the latest market trends. We work with the best suppliers to guarantee the quality of our services and the success of your event. Count on us to make your celebration unique and special.',
                es: 'Nuestra empresa de eventos cuenta con 20 años de experiencia en transformar celebraciones en momentos inolvidables. Con un equipo dedicado y servicios personalizados, nos encargamos de cada detalle de su evento, desde la planificación hasta la ejecución. Ofrecemos soluciones para diferentes tipos de eventos, siempre atentos a las últimas tendencias del mercado. Trabajamos con los mejores proveedores para garantizar la calidad de nuestros servicios y el éxito de su evento. Cuente con nosotros para hacer de su celebración algo único y especial.'
            },
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
        
                <link rel="icon" href="/Imgs/dankeD.svg" />
                <link rel="canonical" href="https://dankeeventos.com.br/sobre"/>

                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Danke Eventos"/>
                <meta name="description" content="Transforme sua celebração em um momento inesquecível com a experiência de 20 anos da Danke Eventos. Nossa equipe dedicada cuida de cada detalhe, oferecendo serviços personalizados e as últimas tendências do mercado. Conte conosco para criar uma celebração única e especial."/>
                <meta name="keywords" content="eventos, festas, organização de eventos, serviços de eventos, equipe experiente, momentos inesquecíveis"/>
                
                <meta property="og:title" content={textsLangs.title[currentLanguage]}/>
                <meta property="og:description" content="Transforme sua celebração em um momento inesquecível com a experiência de 20 anos da Danke Eventos. Nossa equipe dedicada cuida de cada detalhe, oferecendo serviços personalizados e as últimas tendências do mercado. Conte conosco para criar uma celebração única e especial."/>
                <meta property="og:url" content="https://dankeeventos.com.br/sobre"/>
                <meta property="og:image" content="https://dankeeventos.vercel.app/Imgs/logoDankeAntiga.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Danke Eventos"/>
            </Head>
            <main className="gradientBackPage">
                <SobreDanke className={`autoPadding fixedWidth ${montserrat.className}`}>
                    <div>
                        <TituloDanke className="titulo" style={{maxWidth: '650px', width: '100%'}}>
                            {textsLangs.aboutSection.title[currentLanguage]}
                        </TituloDanke>

                        <h2 className="subtitulo" style={{margin: '25px 0',maxWidth: '555px'}}>
                        {textsLangs.aboutSection.caption[currentLanguage]}
                        </h2>

                        <p style={{maxWidth: '575px'}}>
                        {textsLangs.aboutSection.texts[currentLanguage]}
                        </p>
                    </div>
                    
                    <div style={{position: 'relative', width: '100%', maxWidth: '492px'}}>
                        <Image 
                            src={ImagemSobre}
                            alt="Imagem de Karim Engelbart, CEO"
                            layout="responsive"
                            objectFit='cover'
                            width={ImagemSobre.width} height={ImagemSobre.height}
                            quality={25}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={ImagemSobre.blurDataURL}
                        />
                        <p style={{fontSize: '.75rem', fontWeight: '600', top: '15px', position: 'relative'}}>Karim Engelbart, CEO, Danke Eventos</p>
                    </div>

                </SobreDanke>
            </main>
        </>
    );
}

export default Sobre;