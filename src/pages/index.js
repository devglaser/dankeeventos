import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect } from 'react'

import styled from 'styled-components'

import BotaoAcao from './Components/BotaoAcao'



import photo from '../../public/Imgs/photo.png'
import foto from '../../public/Imgs/foto.png'
import Navbar from './Components/Navbar'


const Cabecalho = styled.header`
  position: relative;
  height: 520px;
  @media (max-width: 700px){height: 406px;}
`
const AreaTextosBanner = styled.section`
  position: relative;
  padding:0 75px;
  top: 50px;
  width: 100vw;height: calc(100% - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  
  @media (max-width: 700px){padding: 0 20px;}
`
const TituloBanner = styled.h1`
  font-size: 4.25rem;
  max-width: 920px;

  @media (max-width: 700px){font-size:2.125rem;max-width:480px}
`

////////////

const Sobre = styled.section`
  display: flex;align-items:center;justify-content: space-between;
  background: linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .25), rgba(46, 26, 71, 1));
  @media (max-width:1080px){
    flex-direction: column-reverse;
  }
`

///////////

const Servico = styled.section`
  display: flex;align-items:center;justify-content: space-between;

  @media (max-width:1280px){
    flex-direction: column; 
  }
`
//////////

const Clientes = styled.section`
  text-align: center;
`

export default function Home() {

  return ( 
    <>
      <Head>
        <title>Danke Eventos</title>
        <meta name="description" content="Danke eventos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dankelogo.svg" />
      </Head>
      
      <main>
        <Cabecalho>
          <AreaTextosBanner>
            <h2 className="subtitulo">Mais de 20 anos de experiência</h2>
            <TituloBanner className='titulo'>Tenha um evento inesquecível com a Danke!</TituloBanner>
          </AreaTextosBanner>
        </Cabecalho>

        <Sobre className="autoPadding fixedWidth">
          <div>
            <h1 className="titulo" style={{maxWidth: '650px', width: '100%'}}>
              Transforme seu evento em uma experiência única e inesquecível
            </h1>

            <h2 className="subtitulo" style={{margin: '25px 0',maxWidth: '555px'}}>
            Há 20 anos temos o compromisso de transformar seu evento em um momento inesquecível, com uma equipe experiente e dedicada, oferecendo serviços para atender às necessidades de qualquer evento.
            </h2>

            <div style={{width: '100%',maxWidth: '355px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <BotaoAcao texto={'Contratar Serviços'} />
              <Link href="/sobre" style={{textDecoration: 'underline', fontWeight: '300'}}>Saiba Mais</Link>
            </div>
          </div>
          
          <Image src={foto} className='foto' alt="Foto ilustrativa"/>

        </Sobre>

        <Servico className="autoPadding fixedWidth">
          <Image src={photo} className='photo' alt="Foto ilustrativa"/>
    
          <div>
            <h1 className="titulo" style={{maxWidth: '546px'}}>
            Soluções integradas de decoração e organização de eventos
            </h1>

            <h2 className="subtitulo" style={{margin: '25px 0',maxWidth: '447px'}}>
            Não importa qual seja o seu evento, nós estamos aqui para ajudar
            </h2>

            <p style={{margin: '0 0 25px 0',maxWidth: '495px'}}>
            Profissionais altamente capacitados trabalha para transformar suas ideias em realidade, criando ambientes personalizados e atraentes que impressionarão seus convidados.
            </p>

            <BotaoAcao texto={'Contratar Serviços'} />
          </div>       
        </Servico>

        <Clientes className="autoPadding fixedWidth">
          <h1 className="titulo">Nossos Clientes</h1>
        </Clientes>
      </main>
    </>
  )
}
