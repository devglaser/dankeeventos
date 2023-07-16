import Head from 'next/head'
import Image from "next/legacy/image"
import Link from 'next/link'

import styled from 'styled-components'

import { useState, useEffect } from 'react'

import BotaoAcao from './Components/ActionButton/BotaoAcao'

import backgroundBanner from '../../public/Imgs/bannerBackground.jpg'
import ImagemSobre from '../../public/Imgs/imgSobre.png'
import ImagemServicos from '../../public/Imgs/imgServicos.jpg'
import ClientesA from '../../public/Svg/clientesA.svg'
import ClientesB from '../../public/Svg/clientesB.svg'

import GaleriaA from '../../public/Imgs/galeriaA.png'
import GaleriaB from '../../public/Imgs/galeriaB.png'
import GaleriaC from '../../public/Imgs/galeriaC.png'
import GaleriaD from '../../public/Imgs/galeriaD.png'
import GaleriaE from '../../public/Imgs/galeriaE.png'

import index from '@/styles/index/index.module.css'

const CardsGaleria = styled.div`
  padding: 25px;
  max-width: 285px;width:100%;
  border: 3px solid #e5e1e6;
  border-top-right-radius:  65.5px;

  p{
    margin-top: 25px;
  }

  @media (max-width:1200px) {
   img{
    max-width: 25px;
   }
   
   p{
    font-size: .875rem;
    @media (max-width:500px) {
      font-size: .675rem;
    }
   }
  }
`

const CardGaleria = ({ texto = "Eventos sociais", icone = "drink", alt = 'taça', w = 34.67 }) => (
  <CardsGaleria>
    <Image src={`/Svg/${icone}.svg`} alt={`Icone ilustrativo de ${alt}`} width={w} height={35} />
    <p style={{ fontWeight: 'bold' }}>{texto}</p>
  </CardsGaleria>
);


export default function Home() { 

  const [currentLanguage, setCurrentLanguage] = useState('ptbr')

    const textsLangs = {
        home:{
            headerSection:{
                title:{
                    ptbr: 'Tenha um evento inesquecível com a Danke!',
                    usa: 'Have an unforgettable event with Danke!',
                    es: '¡Tenga un evento inolvidable con Danke!',
                },
                caption:{
                    ptbr: 'Mais de 20 anos de experiência',
                    usa: 'More than 20 years of experience',
                    es: 'Más de 20 años de experiencia',
                },
            },
            aboutSection:{
                title:{
                    ptbr: 'Transforme seu evento em uma experiência única e inesquecível',
                    usa: 'Turn your event into a unique and unforgettable experience',
                    es: 'Convierte tu evento en una experiencia única e inolvidable',
                },
                caption:{
                    ptbr: 'Há 20 anos temos o compromisso de transformar seu evento em um momento inesquecível, com uma equipe experiente e dedicada, oferecendo serviços para atender às necessidades de qualquer evento.',
                    usa: 'For 20 years we have been committed to transforming your event into an unforgettable moment, with an experienced and dedicated team, offering services to meet the needs of any event.',
                    es: 'Desde hace 20 años nos hemos comprometido a transformar su evento en un momento inolvidable, contando con un equipo experimentado y dedicado, ofreciendo servicios para satisfacer las necesidades de cualquier evento.',
                },
            },
            portfolioSection:{
                title:{
                    ptbr: 'Fotos dos nossos eventos',
                    usa: 'Photos of our events',
                    es: 'Fotos de nuestros eventos',
                },
                caption:{
                    ptbr: 'Atendimento personalizado',
                    usa: 'Personalized service',
                    es: 'Atendimiento personalizado',
                },
                texts: {
                    ptbr: {
                        a:'Eventos sociais',
                        b:'Eventos Cerimoniais',
                        c:'Eventos Esportivos',
                        d:'Eventos de Exibição',
                    },
                    usa: {
                        a:'Social events',
                        b:'Ceremonial Events',
                        c:'Sports event',
                        d:'Display Events',
                    },
                    es: {
                        a:'Eventos sociales',
                        b:'Eventos Ceremoniales',
                        c:'Evento deportivo',
                        d:'Mostrar eventos',
                    }
                },
                content:{
                    ptbr: 'Galeria',
                    usa: 'Gallery',
                    es: 'Galería'
                }
            },
            servicesSection:{
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
                texts:{
                    ptbr: 'Profissionais altamente capacitados trabalha para transformar suas ideias em realidade, criando ambientes personalizados e atraentes que impressionarão seus convidados.',
                    usa: 'Highly trained professionals work to turn your ideas into reality, creating personalized and attractive environments that will impress your guests.',
                    es: 'Profesionales altamente capacitados trabajan para convertir sus ideas en realidad, creando ambientes personalizados y atractivos que impresionarán a sus invitados.'
                }
            },
            clientsSection:{
                title:{
                    ptbr: 'Nossos Clientes',
                    usa: 'Our Clients',
                    es: 'Nuestros Clientes',
                },
            },
        },
        buttons:{
            actionButton:{
                ptbr: 'Contratar Serviço',
                usa: 'Hire Service',
                es: 'Contratar Servicio'
            },
            aboutButton:{
                ptbr: 'Saiba Mais',
                usa: 'Know more',
                es: 'Sepa mas'
            },
            galeryButton: {
                ptbr: 'Ver Fotos',
                usa: 'See Pictures',
                es: 'Ver Fotos'
            }
        }
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

  const keyTextGalery = textsLangs.home.portfolioSection.texts[currentLanguage]
  const textsGalery = [
    keyTextGalery && keyTextGalery.a,
    keyTextGalery && keyTextGalery.b,
    keyTextGalery && keyTextGalery.c,
    keyTextGalery && keyTextGalery.d,
  ]

  const [largura, setLargura] = useState('');
  
  const [clientesRender, setClinetesRender] = useState(ClientesA)

  useEffect(() => {
      (() => {
          try {
              window.addEventListener('resize', () => {setLargura(window.innerWidth)});
              window.removeEventListener('resize', () => {setLargura(window.innerWidth)});
          } catch (error) {
              console.warn(error);
          } finally {
              setLargura(window.innerWidth);
              largura > 500 ? setClinetesRender(ClientesA) : setClinetesRender(ClientesB)
          }
      })();
  }, [largura]);

  return ( 
    <>
      <Head>
        <title>Danke Eventos - Transformando seu evento em um momento inesquecível</title>
        
        <link rel="icon" href="/Imgs/logoDankeAntiga.png" />
        <link rel="canonical" href="https://dankeeventos.com.br"/>

        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Danke Eventos"/>
        <meta name="description" content="Há 20 anos temos o compromisso de transformar seu evento em um momento inesquecível, com uma equipe experiente e dedicada, oferecendo serviços para atender às necessidades de qualquer evento."/>
        <meta name="keywords" content="eventos, festas, organização de eventos, serviços de eventos, equipe experiente, momentos inesquecíveis"/>
        
        <meta property="og:title" content="Danke Eventos"/>
        <meta property="og:description" content="Há 20 anos temos o compromisso de transformar seu evento em um momento inesquecível, com uma equipe experiente e dedicada, oferecendo serviços para atender às necessidades de qualquer evento."/>
        <meta property="og:url" content="https://dankeeventos.com.br"/>
        <meta property="og:image" content="https://dankeeventos.vercel.app/Imgs/logoDankeAntiga.png"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Danke Eventos"/>
      </Head>
      
      <main className='gradientBackPage'>
        
        <header id={index.cabecalho}>
          
          <section id={index.areaTextosBanner}>
            <h2 className="subtitulo">{textsLangs.home.headerSection.caption[currentLanguage]}</h2> 
            <h1 className="titulo" id={index.tituloBanner}>{textsLangs.home.headerSection.title[currentLanguage]}</h1>
          </section>

          <section id={index.backBanner}>
            
            <Image
                src={backgroundBanner}
                alt="Imagem de fundo RAFFO Fest"
                layout='fill'
                objectFit={'cover'}
                quality={25}
                placeholder="blur"
                blurDataURL={backgroundBanner.blurDataURL}
                priority={true}
              />

          </section>

        </header>

        <section id={index.sectionSobre}>
          <main className="autoPadding fixedWidth" id={index.sobre}>
            <div>
              <h1 className="titulo">
                {textsLangs.home.aboutSection.title[currentLanguage]}
              </h1>

              <h2 className="subtitulo">
                {textsLangs.home.aboutSection.caption[currentLanguage]}
              </h2>

              <div>
                <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]} />
                <Link href="/sobre">{textsLangs.buttons.aboutButton[currentLanguage]}</Link>
              </div>
            </div>

            <div>
              <Image 
                src={ImagemSobre}
                alt="Três imagens de eventos da Danke"
                width={492} height={397}
                layout="responsive"
                objectFit="cover"
                quality={50}
                loading="lazy"
                placeholder="blur"
                blurDataURL={ImagemSobre.blurDataURL}
              />
            </div>
            
            

          </main>
        </section>

        <section className="autoPadding fixedWidth" id={index.sectionGaleria}>
          
          <header>
            <h1 className="titulo" id={index.tituloGaleria}>
              {textsLangs.home.portfolioSection.title[currentLanguage]}
            </h1>
            
            <Link href="/portfolio" className="hLinkPortGaleria">{textsLangs.buttons.galeryButton[currentLanguage]} <Image src="/Svg/seta.svg" alt="Icone de seta" width={19} height={15} className="setaLink"/> </Link>
          </header>

          <main id={index.areaImgs}>

            <div className={index.areaImg}>
              <Image
                alt="WINDSOR | Principe e Princesa de Dinamarca"
                src={GaleriaA}
                layout="responsive"
                objectFit="cover"
                width={596} height={398}
                quality={50}
                loading="lazy"
                placeholder="blur"
                blurDataURL={GaleriaA.blurDataURL}
              />
            </div>

            <div className={index.areaImg}>
              <Image
                alt="Aniversário"
                src={GaleriaB}
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={25}
                loading="lazy"
                placeholder="blur"
                blurDataURL={GaleriaB.blurDataURL}
              />
            </div>
            <div className={index.areaImg}>
              <Image
                alt="Club Med Presidentes Gala"
                src={GaleriaC}
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={GaleriaC.blurDataURL}
              />
            </div>
            <div className={index.areaImg}>
              <Image
                alt="Saxofonista"
                src={GaleriaD}
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={25}
                loading="lazy"
                placeholder="blur"
                blurDataURL={GaleriaD.blurDataURL}
              />
            </div>
            <div className={index.areaImg}>
              <Image
                alt="Evento Avon"
                src={GaleriaE}
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={25}
                loading="lazy"
                placeholder="blur"
                blurDataURL={GaleriaE.blurDataURL}
              />
            </div>
          </main>

          <div>
            <Link href="/portfolio" className="linkPortGaleria" style={{fontWeight: '600'}}>{textsLangs.buttons.galeryButton[currentLanguage]} <Image src="/Svg/seta.svg" alt="Icone de seta" width={15} height={11} className="setaLink"/> </Link>
          </div>
          
          <h1 className="subtitulo">{textsLangs.home.portfolioSection.caption[currentLanguage]}</h1>

          <section id={index.areaCards}>
            <CardGaleria texto={textsGalery[0]}/>
            <CardGaleria texto={textsGalery[1]} icone='nick' alt='tesoura' w={35.83}/>
            <CardGaleria texto={textsGalery[2]} icone='ball' alt='bola de tênis' w={36.13}/>
            <CardGaleria texto={textsGalery[3]} icone='confe' alt='pessoa palestrando' w={38.18}/>
          </section>
        </section>

        <section className="autoPadding fixedWidth" id={index.sectionServicos}>
          
            <div>
              <Image 
                src={ImagemServicos}
                alt="Equipe da Danke eventos em produção"
                layout="responsive"
                objectFit={'cover'}
                width={492} height={333}
                quality={25}
                loading="lazy"
                placeholder="blur"
                blurDataURL={ImagemServicos.blurDataURL}
              />
            </div>
    
          <main id={index.textosServicos} >
            <h1 className="titulo">
            {textsLangs.home.servicesSection.title[currentLanguage]}
            </h1>

            <h2 className="subtitulo" >
            {textsLangs.home.servicesSection.caption[currentLanguage]}
            </h2>

            <p >
            {textsLangs.home.servicesSection.texts[currentLanguage]}
            </p>

            <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]} />
          </main>       
        </section>

        <section id={index.sectionClientes} className="autoPadding fixedWidth">
          
          <h1 className="titulo">{textsLangs.home.clientsSection.title[currentLanguage]}</h1>

          <div>
            
            <Image
              src={clientesRender}
              alt="Três imagens de eventos da Danke"
              layout="responsive"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
            
          </div>

        </section>
      </main>
    </>
  )
}