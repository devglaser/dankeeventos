import Head from 'next/head'
import Image from "next/legacy/image"
import Link from 'next/link'

import styled from 'styled-components'

import { useState, useEffect } from 'react'

import BotaoAcao from './Components/ActionButton/BotaoAcao'
import ImagemServicos from '../../public/Imgs/imgServicos.jpg'
import ClientesA from '../../public/Svg/clientesA.svg'
import ClientesB from '../../public/Svg/clientesB.svg'

import GaleriaA from '../../public/Imgs/galeriaA.jpg'
import GaleriaB from '../../public/Imgs/galeriaB.jpg'
import GaleriaC from '../../public/Imgs/galeriaC.jpg'
import GaleriaD from '../../public/Imgs/galeriaD.jpg'
import GaleriaE from '../../public/Imgs/galeriaE.jpg'

import index from '@/styles/index/index.module.css'
import ReactPlayer from 'react-player/lazy'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets:['latin']})

const CardsGaleria = styled.div`
  padding: 25px;
  max-width: 300px;width:100%;
  border: 3px solid #e5e1e6;
  border-top-right-radius:  65.5px;

  p{
    margin-top: 25px;
    font-size: .9rem;
  }

  @media (max-width:1200px) {
   img{
    max-width: 25px;
   }
   
   p{
    
   }
  }

  @media (max-width:635px) {
    height: 210px;
    display: flex ; align-items: start; justify-content: center; flex-direction: column;
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
            aboutSection:{
                title:{
                    ptbr: 'Mais que eventos. Experiências.',
                    usa: 'More than events. Experiences.',
                    es: 'Más que eventos. Experiencias.',
                },
                caption:{
                    ptbr: 'Planejamento. Produção. Gestão. MICE.',
                    usa: 'Planning. Production. Management. MICE.',
                    es: 'Planificación. Producción. Gestión. MICE.',
                },
            },
            portfolioSection:{
                title:{
                    ptbr: 'Nosso Portfólio',
                    usa: 'Our Portfolio',
                    es: 'Nuestro Portafolio',
                },
                caption:{
                    ptbr: 'Serviços',
                    usa: 'Services',
                    es: 'Servicios',
                },
                texts: {
                    ptbr: {
                        a:'Espaços',
                        b:'Alta Gastronomia & Open Bar',
                        c:'Cenografia e Decoração',
                        d:'Audiovisual',
                        e:'Shows e Atrações Especiais',
                        f:'Estandes para Feiras',
                    },
                    usa: {
                        a:'Spaces',
                        b:'High Gastronomy & Open Bar',
                        c:'Scenography and Decoration',
                        d:'Audiovisual',
                        e:'Shows and Special Attractions',
                        f:'Stands for Fairs',
                    },
                    es: {
                        a:'Espacios',
                        b:'Alta Gastronomía & Barra Libre',
                        c:'Escenografía y Decoración',
                        d:'Audiovisual',
                        e:'Espectáculos y atracciones especiales',
                        f:'Stands para Ferias',
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
                    ptbr: `Aliando profissionalismo a valorização dos detalhes e criatividade, propiciamos uma
                    experiência prazerosa desde a idealização à execução do seu evento!`,
                    usa: `Combining professionalism with the appreciation of details and creativity, we provide a
                    Pleasant experience from the idealization to the execution of your event!`,
                    es: `Combinando profesionalismo con la apreciación de los detalles y la creatividad, brindamos una
                    ¡Una agradable experiencia desde la idealización hasta la ejecución de tu evento!`,
                },
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
  
  const textsGalery = [keyTextGalery && keyTextGalery.a,keyTextGalery && keyTextGalery.b,keyTextGalery && keyTextGalery.c,keyTextGalery && keyTextGalery.d, keyTextGalery && keyTextGalery.e, keyTextGalery && keyTextGalery.f]

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
        
        <link rel="icon" href="/Imgs/dankeD.svg"/>
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
        
        <meta name="google-site-verification" content="-aXzEbRy3BMAAnmA2VWeLHdkaOb2IXepd3UQ6dXohY0" />
      </Head>
      
      <main className={`${montserrat.className} gradientBackPage`} >
        
        <header id={index.cabecalho}>

          <div id={index.logoTitulo}>
            <Image src={'/Imgs/logo.svg'} alt={''} width={646} height={386}/>
          </div>
          
          <ReactPlayer url={'/video/danke.mp4'} loop playing muted playsinline/>

          <div id={index.scrollIndicator}></div>

        </header>

        <section id={index.sectionSobre}>
          <main className="autoPadding fixedWidth" id={index.sobre}>
          <h1 className="titulo">

                {textsLangs.home.aboutSection.title[currentLanguage]}
              </h1>

              <h2 className="subtitulo">
                {textsLangs.home.aboutSection.caption[currentLanguage]}
              </h2>
              
              <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]} />

          </main>
        </section>

        <section className="autoPadding fixedWidth" id={index.sectionGaleria}>
          
          <header>
            <h1 className="titulo" id={index.tituloGaleria}>
              {textsLangs.home.portfolioSection.title[currentLanguage]}
            </h1>
            
            <Link href="/portfolio" className="hLinkPortGaleria">{textsLangs.buttons.galeryButton[currentLanguage]}</Link>
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
          
          <h1 className="subtitulo" id={index.tituloCards}>{textsLangs.home.portfolioSection.caption[currentLanguage]}</h1>

          <section id={index.areaCards}>
            <CardGaleria texto={textsGalery[0]} icone='chair'/>
            <CardGaleria texto={textsGalery[1]} icone='drink' alt='tesoura'/>
            <CardGaleria texto={textsGalery[2]} icone='decoration' alt='bola de tênis' w={36.13}/>
            <CardGaleria texto={textsGalery[3]} icone='cam' alt='pessoa palestrando' w={38.18}/>
            <CardGaleria texto={textsGalery[4]} icone='show' alt='bola de tênis' w={36.13}/>
            <CardGaleria texto={textsGalery[5]} icone='confe' alt='pessoa palestrando' w={38.18}/>
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