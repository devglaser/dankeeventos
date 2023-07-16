import Head from "next/head";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";

import {useState, useEffect} from 'react'

import styled from "styled-components";

import ImagemSobre from '../../public/Imgs/galeriaC.png'
import ImagemServicos from '../../public/Imgs/imgServicos.jpg'


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
                ptbr:'Nossa empresa de eventos tem 20 anos de experiência em transformar celebrações em momentos inesquecíveis. Com uma equipe dedicada e serviços personalizados, cuidamos de todos os detalhes do seu evento, desde o planejamento até a execução. Oferecemos soluções para diversos tipos de eventos, sempre atentos às últimas tendências do mercado. Trabalhamos com os melhores fornecedores para garantir a qualidade dos nossos serviços e o sucesso do seu evento. Conte conosco para tornar sua celebração única e especial.',
                usa: 'Our events company has 20 years of experience in transforming celebrations into unforgettable moments. With a dedicated team and personalized services, we take care of every detail of your event, from planning to execution. We offer solutions for different types of events, always attentive to the latest market trends. We work with the best suppliers to guarantee the quality of our services and the success of your event. Count on us to make your celebration unique and special.',
                es: 'Nuestra empresa de eventos cuenta con 20 años de experiencia en transformar celebraciones en momentos inolvidables. Con un equipo dedicado y servicios personalizados, nos encargamos de cada detalle de su evento, desde la planificación hasta la ejecución. Ofrecemos soluciones para diferentes tipos de eventos, siempre atentos a las últimas tendencias del mercado. Trabajamos con los mejores proveedores para garantizar la calidad de nuestros servicios y el éxito de su evento. Cuente con nosotros para hacer de su celebración algo único y especial.'
            },
        },
        servicesSection: {
            title:{
                ptbr: 'Soluções integradas de decoração e organização de eventos',
                usa: 'Integrated decoration and event organization solutions',
                es: 'Soluciones integrales de decoración y organización de eventos',
            },
            caption:{
                ptbr: 'Não importa qual seja o seu evento, nós estamos aqui para ajudar',
                usa: 'No matter what your event is, we are here to help.',
                es: 'No importa cuál sea tu evento, estamos aquí para ayudarte.',
            },
            texts: {
                ptbr:'Nossa empresa oferece soluções integradas para a organização e decoração de eventos. Com anos de experiência, nossa equipe de profissionais trabalha para transformar suas ideias em realidade, criando ambientes personalizados e atraentes para impressionar seus convidados. Nossos serviços são flexíveis e customizáveis, adaptados às necessidades específicas de cada cliente. Deixe-nos cuidar de todos os detalhes, para que você possa desfrutar de um evento perfeito e sem preocupações. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de decoração e organização de eventos.',
                usa: 'Our company offers integrated solutions for the organization and decoration of events. With years of experience, our team of professionals works to turn your ideas into reality, creating personalized and attractive environments to impress your guests. Our services are flexible and customizable, tailored to the specific needs of each client. Let us take care of all the details, so you can enjoy a seamless, worry-free event. Contact us today to find out more about our event planning and decoration services.',
                es: 'Nuestra empresa ofrece soluciones integrales para la organización y decoración de eventos. Con años de experiencia, nuestro equipo de profesionales trabaja para convertir sus ideas en realidad, creando ambientes personalizados y atractivos para impresionar a sus invitados. Nuestros servicios son flexibles y personalizables, adaptados a las necesidades específicas de cada cliente. Permítanos encargarnos de todos los detalles, para que pueda disfrutar de un evento sin problemas y sin preocupaciones. Contáctenos hoy para obtener más información sobre nuestros servicios de planificación y decoración de eventos.'
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
        
                <link rel="icon" href="/Imgs/logoDankeAntiga.png" />
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
                <SobreDanke className="autoPadding fixedWidth">
                    <div>
                        <TituloDanke className="titulo" style={{maxWidth: '650px', width: '100%'}}>
                            {textsLangs.aboutSection.title[currentLanguage]}
                        </TituloDanke>

                        <h2 className="subtitulo" style={{margin: '25px 0',maxWidth: '555px'}}>
                        {textsLangs.aboutSection.caption[currentLanguage]}
                        </h2>

                        <p style={{maxWidth: '630px'}}>
                        {textsLangs.aboutSection.texts[currentLanguage]}
                        </p>
                    </div>
                    
                    <div style={{position: 'relative', width: '100%', maxWidth: '492px'}}>
                        <Image 
                            src={ImagemSobre}
                            alt="Imagem de jantar realizado pela Danke Eventos"
                            layout="responsive"
                            objectFit='cover'
                            width={492} height={292}
                            quality={75}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={ImagemSobre.blurDataURL}
                        />
                    </div>

                </SobreDanke>

                <Servico className="autoPadding fixedWidth">
                    <div style={{position: 'relative', width: '100%', maxWidth: '492px'}}>
                        <Image 
                            src={ImagemServicos}
                            alt="Imagem da equipe organizando o evento"
                            layout="responsive"
                            objectFit={'cover'}
                            width={492} height={292}
                            quality={75}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={ImagemServicos.blurDataURL}
                        />
                    </div>
            
                    <div>
                        <h1 className="titulo" style={{maxWidth: '546px'}}>
                            {textsLangs.servicesSection.title[currentLanguage]}
                        </h1>

                        <h2 className="subtitulo" style={{margin: '25px 0',maxWidth: '447px'}}>
                            {textsLangs.servicesSection.caption[currentLanguage]}
                        </h2>

                        <p style={{maxWidth: '630px'}}>
                        {textsLangs.servicesSection.texts[currentLanguage]}
                        </p>
                    </div>       
                </Servico>
            </main>
        </>
    );
}

export default Sobre;