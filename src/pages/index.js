import Head from 'next/head'
import Image from "next/legacy/image"
import Link from 'next/link'

import { useEffect } from 'react'

import styled from 'styled-components'

import BotaoAcao from './Components/ActionButton/BotaoAcao'



import ImgSobre from '../../public/Imgs/imgSobre.png'


const Cabecalho = styled.header`
  position: relative;
  height: 520px;
  @media (max-width: 700px){height: 406px;}
`
const AreaTextosBanner = styled.section`
  position: relative;
  padding:0 75px;
  top: 95px;
  width: 100vw;height: calc(100% - 95px);
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
const BackBanner = styled.section`
  position: relative;
  top:0;left: 0;
  width: 100%;
  height: 100%;max-height:615px;
  z-index: -1;
  overflow: hidden;
  display: none;

  &::after{
    content: '';
    position: absolute;
    width: 100%;height:100%;
    background: linear-gradient(180deg,rgba(0,0,0,.25), rgba(97, 38, 81, .5), rgba(46, 26, 71, 1));
  }
`
////////////

const SectionSobre = styled.section`
  background: linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, .25), rgba(46, 26, 71, 1));
`

const Sobre = styled.main`
  display: flex;align-items:center;justify-content: space-between;
  @media (max-width:1080px){
    flex-direction: column-reverse;
  }
`

///////////

const Servico = styled.section`
  display: flex;align-items:center;justify-content: space-between;
  height: 608px;

  &::before{
    content:'';
    position: absolute;
    right: 0;
    width: 100%;height: 100%;
    max-width: 41.5%;max-height:608px;
    background: linear-gradient(180deg, rgba(46, 26, 71, 1), rgba(97, 38, 81, 1));
    border-bottom-left-radius: 50%;
    z-index: -1;
  }

  @media (max-width:1215px){
    position: relative;
    flex-direction: column;
    height: 100%; 

    &::before{
      bottom: 0;
      max-width:83%; max-height: 553px;
      border-bottom-left-radius: 150px;
    }
  }
`
const TextosServicos = styled.main`
  @media (max-width: 1215px) {
    height: 553px;
    padding-top: 50px;
  }
`
//////////

const Clientes = styled.section`
  text-align: center;
`

const ImageHomeMax = styled.div`
  max-width: 492px;
  width: 100%;
`

///////////

const SectionGaleria = styled.section `
  position: relative;
`

const TituloGaleleria = styled.h1 `
  position: relative;
  left: 40px;

  @media (max-width:700px) {
    font-size: 1.375rem;
  }

  &::before{
    content: 'Galeria';
    position: absolute;
    top: -78%;left:-8%;
    color: rgba(97, 38, 81, .5);
    z-index: -1;
    font-size: 1rem;font-weight: 400;

    font-size: 4.25rem;

    @media (max-width: 700px){
      font-size:2.125rem;
    }
  }
`
const AreaImgs = styled.main`
  margin-top: 25px;
  display: grid;grid-gap:10px 25px;place-items:center;
  grid-template-areas: 'imgA imgA imgB imgC'
                        'imgA imgA imgD imgE';

  @media (max-width:1215px) {
    margin: 25px auto;
    max-width: 598px;
    grid-template-areas: 'imgA imgA'
                        'imgB imgC'
                        'imgD imgE';
  }

  @media (min-width:1216px) {
    height: 398px;
  }
`

const AreaImg = styled.div`
  position: relative;
  width: 100%;
  grid-area: ${({area}) => area};
  overflow: hidden;
`

const AreaCards = styled.section`
  width: 100%;
  display: grid; grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  @media (max-width:1215px) {
   grid-template-columns: repeat(2,1fr);
  }
`

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
   }
  }
`

const CardGaleria = ({texto = "Eventos sociais", icone = "drink", alt = 'taça', w = 34.67}) => <>
  <CardsGaleria >
    <Image src={`/Svg/${icone}.svg`} alt={`Icone ilustrativo de ${alt}`} width={w} height={35}/>
    <p style={{fontWeight: 'bold'}}>{texto}</p>
  </CardsGaleria>
</>

export default function Home() {

  return ( 
    <>
      <Head>
        <title>Danke Eventos</title>
        <meta name="description" content="Danke eventos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Svg/dankelogo.svg" />
      </Head>
      
      <main>
        <Cabecalho>
          <AreaTextosBanner>
            <h2 className="subtitulo">Mais de 20 anos de experiência</h2>
            <TituloBanner className='titulo'>Tenha um evento inesquecível com a Danke!</TituloBanner>
          </AreaTextosBanner>
          <BackBanner >
            <Image
                src={"/Imgs/bannerBackground.jpg"}
                alt="Imagem de fundo RAFFO Fest"
                layout="fill"
                objectFit='cover'
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`/Imgs/bannerBackground.jpg`}
              />
          </BackBanner>
        </Cabecalho>

        <SectionSobre>
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

            <ImageHomeMax>
              <Image 
                src={ImgSobre}
                alt="My Image"
                layout="responsive"
                objectFit="cover"
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
            </ImageHomeMax>
            
            

          </Sobre>
        </SectionSobre>

        <SectionGaleria className="autoPadding fixedWidth">
          
          <header style={{display:"flex",alignItems: 'center', justifyContent: 'space-between'}}>
            <TituloGaleleria className="titulo">
              Fotos dos nossos eventos
            </TituloGaleleria>
            
            <Link href="/portfolio" className="hLinkPortGaleria" style={{fontWeight: '600'}}>Ver fotos <Image src="/Svg/seta.svg" alt="Icone de seta" width={19} height={15} className="setaLink"/> </Link>
          </header>

          <AreaImgs>
            <AreaImg area={"imgA"}>
              <Image
                alt="WINDSOR | Principe e Princesa de Dinamarca"
                src="/Imgs/galeriaA.png"
                layout="responsive"
                objectFit="cover"
                width={596} height={398}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
            </AreaImg>
            <AreaImg area={"imgB"}>
              <Image
                alt="Aniversário"
                src="/Imgs/galeriaB.png"
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
            </AreaImg>
            <AreaImg area={"imgC"}>
              <Image
                alt="Club Med Presidentes Gala"
                src="/Imgs/galeriaC.png"
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
            </AreaImg>
            <AreaImg area={"imgD"}>
              <Image
                alt="Saxofonista"
                src="/Imgs/galeriaD.png"
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
            </AreaImg>
            <AreaImg area={"imgE"}>
              <Image
                alt="Evento Avon"
                src="/Imgs/galeriaE.png"
                layout="responsive"
                objectFit="cover"
                width={285} height={190}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
            </AreaImg>
          </AreaImgs>

          <Link href="/portfolio" className="linkPortGaleria" style={{fontWeight: '600'}}>Ver fotos <Image src="/Svg/seta.svg" alt="Icone de seta" width={15} height={11} className="setaLink"/> </Link>
          
          <h1 className="subtitulo" style={{margin: "25px 0"}}>Atendimento personalizado</h1>

          <AreaCards>
            <CardGaleria/>
            <CardGaleria texto='Eventos Cerimoniais' icone='nick' alt='tesoura' w={35.83}/>
            <CardGaleria texto='Eventos Esportivos' icone='ball' alt='bola de tênis' w={36.13}/>
            <CardGaleria texto='Eventos de Exibição' icone='confe' alt='pessoa palestrando' w={38.18}/>
          </AreaCards>
        </SectionGaleria>

        <Servico className="autoPadding fixedWidth">
          
            <ImageHomeMax>
              <Image 
                src={'/Imgs/imgServicos.jpg'}
                alt="Equipe da Danke eventos em produção"
                layout="responsive"
                objectFit={'cover'}
                width={492} height={333}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
            </ImageHomeMax>
    
          <TextosServicos >
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
          </TextosServicos>       
        </Servico>

        <Clientes className="autoPadding fixedWidth">
          <h1 className="titulo">Nossos Clientes</h1>
        </Clientes>
      </main>
    </>
  )
}
