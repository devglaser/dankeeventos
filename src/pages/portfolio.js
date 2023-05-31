import React from "react";
import Image from "next/legacy/image";
import Head from "next/head";

import styled from "styled-components";

import Masonry from "react-responsive-masonry";

import danke1 from "../../public/Imgs/portfolio/danke1.jpg";
import danke2 from "../../public/Imgs/portfolio/danke2.jpg";
import danke3 from "../../public/Imgs/portfolio/danke3.jpg";
import danke4 from "../../public/Imgs/portfolio/danke4.jpg";
import danke5 from "../../public/Imgs/portfolio/danke5.jpg";
import danke6 from "../../public/Imgs/portfolio/danke6.jpg";
import danke7 from "../../public/Imgs/portfolio/danke7.jpg";
import danke8 from "../../public/Imgs/portfolio/danke8.jpg";
import danke9 from "../../public/Imgs/portfolio/danke9.jpg";
import danke10 from "../../public/Imgs/portfolio/danke10.jpg";
import danke11 from "../../public/Imgs/portfolio/danke11.png";
import danke12 from "../../public/Imgs/portfolio/danke12.jpg";
import danke13 from "../../public/Imgs/portfolio/danke13.jpg";
import danke14 from "../../public/Imgs/portfolio/danke14.jpg";
import danke15 from "../../public/Imgs/portfolio/danke15.jpg";
import danke16 from "../../public/Imgs/portfolio/danke16.jpg";
import danke17 from "../../public/Imgs/portfolio/danke17.jpg";
import danke18 from "../../public/Imgs/portfolio/danke18.jpg";
import danke19 from "../../public/Imgs/portfolio/danke19.jpg";
import danke20 from "../../public/Imgs/portfolio/danke20.jpg";
import danke21 from "../../public/Imgs/portfolio/danke21.jpg";
import danke22 from "../../public/Imgs/portfolio/danke22.jpg";
import danke23 from "../../public/Imgs/portfolio/danke23.jpg";
import danke24 from "../../public/Imgs/portfolio/danke24.jpg";
import danke25 from "../../public/Imgs/portfolio/danke25.jpg";
import danke26 from "../../public/Imgs/portfolio/danke26.jpg";
import danke27 from "../../public/Imgs/portfolio/danke27.jpeg";
import danke28 from "../../public/Imgs/portfolio/danke28.jpeg";
import danke29 from "../../public/Imgs/portfolio/danke29.jpg";
import danke30 from "../../public/Imgs/portfolio/danke30.jpg";
import danke31 from "../../public/Imgs/portfolio/danke31.jpg";
import danke32 from "../../public/Imgs/portfolio/danke32.jpg";
import danke33 from "../../public/Imgs/portfolio/danke33.jpg";
import danke34 from "../../public/Imgs/portfolio/danke34.jpg";
import danke35 from "../../public/Imgs/portfolio/danke35.jpg";
import danke36 from "../../public/Imgs/portfolio/danke36.jpg";
import danke37 from "../../public/Imgs/portfolio/danke37.jpg";
import danke38 from "../../public/Imgs/portfolio/danke38.jpg";
import danke39 from "../../public/Imgs/portfolio/danke39.jpg";
import danke40 from "../../public/Imgs/portfolio/danke40.jpg";
import danke41 from "../../public/Imgs/portfolio/danke41.jpg";
import danke42 from "../../public/Imgs/portfolio/danke42.jpg";
import danke43 from "../../public/Imgs/portfolio/danke43.jpg";
import danke44 from "../../public/Imgs/portfolio/danke44.jpg";
import danke45 from "../../public/Imgs/portfolio/danke45.jpg";
import danke46 from "../../public/Imgs/portfolio/danke46.jpg";
import danke47 from "../../public/Imgs/portfolio/danke47.jpg";
import danke48 from "../../public/Imgs/portfolio/danke48.jpg";
import danke49 from "../../public/Imgs/portfolio/danke49.jpg";
import danke50 from "../../public/Imgs/portfolio/danke50.jpg";
import danke51 from "../../public/Imgs/portfolio/danke51.jpg";


import { useState, useEffect } from "react";

const SectionPortfolio = styled.main`
  margin-top: 95px;
`;

const CustomMasonry = styled(Masonry)`
  div{p{
    margin-top: 10px;
    font-weight: bold;

    @media (max-width:500px) {
     font-size: .625rem;
    }
  }}
`;

const ViewImageStyle = styled.div`
  position: fixed;
  display: grid; place-items: center;
  top: 0;left:0;
  width: 100vw;height:100vh;
  background: rgba(97, 38, 81, .9);
  z-index: 999;
  overflow: hidden;

  header{
    position: absolute;
    top: 15px;left:0;
    width: 99vw;height: 45px;
    z-index: 99;

    button{
      position: relative;
      float: right;
      padding: 10px 25px;
      height: 45px;
      background: transparent;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      border: 1px solid transparent;
      text-decoration: underline;
    }
  }

  div{
    position: relative;
    width: 100vw;height: 100vh;
  }
`

const Portfolio = () => {  

  const [currentLanguage, setCurrentLanguage] = useState('ptbr')

    const textsLangs = {
        title:{
          ptbr: 'Portfólio',
          usa: 'Portfolio',
          es: 'Portafolio'
        },
        ptbr: 'Confira alguns de nossos eventos',
        usa: 'Check out some of our events',
        es: 'Conoce algunos de nuestros eventos'
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

  const [colums, setColums] = useState(3)
  const [largura, setLargura] = useState('')

  const [activeViewImage, setActveViewImage] = useState(false)
  const [indexImage, setIndexImage] = useState(2)

  const images = [
    { path: danke1, alt: "AMC The Walking Dead" },
    { path: danke2, alt: "AMC The Walking Dead" },
    { path: danke3, alt: "AMC The Walking Dead" },
    { path: danke4, alt: "AMC The Walking Dead" },
    { path: danke5, alt: "Aniversário Pietra" },
    { path: danke6, alt: "Aniversário Pietra" },
    { path: danke7, alt: "Evento Avon" },
    { path: danke8, alt: "Evento Avon" },
    { path: danke9, alt: "Cais do Oriente" },
    { path: danke10, alt: "Casamento a beira do mar" },
    { path: danke11, alt: "Casamento a beira do mar" },
    { path: danke12, alt: "Casamento a beira do mar" },
    { path: danke13, alt: " " },
    { path: danke14, alt: " " },
    { path: danke15, alt: " " },
    { path: danke16, alt: "Escuna" },
    { path: danke17, alt: "Expert" },
    { path: danke18, alt: "CLUB MED Presidentes Gala Dinner" },
    { path: danke19, alt: "Hotel Teresa" },
    { path: danke20, alt: "Hotel Teresa" },
    { path: danke21, alt: "Hotel Teresa" },
    { path: danke22, alt: "HSBC" },
    { path: danke23, alt: "HSBC" },
    { path: danke24, alt: "HSBC" },
    { path: danke25, alt: "HSBC" },
    { path: danke26, alt: "HSBC" },
    { path: danke27, alt: "HYATT" },
    { path: danke28, alt: "HYATT" },
    { path: danke29, alt: "WINDSOR jantar principe e princesa dinamarca" },
    { path: danke30, alt: "Jantar Avon" },
    { path: danke31, alt: "LAZERTUR" },
    { path: danke32, alt: "LAZERTUR" },
    { path: danke33, alt: "LAZERTUR" },
    { path: danke34, alt: "Morro da Urca" },
    { path: danke35, alt: "Morro da Urca" },
    { path: danke36, alt: "Morro da Urca" },
    { path: danke37, alt: "Expert" },
    { path: danke38, alt: "RAFFO Fest" },
    { path: danke39, alt: "RAFFO Fest" },
    { path: danke40, alt: "RAFFO Fest" },
    { path: danke41, alt: "Renault" },
    { path: danke42, alt: "Renault" },
    { path: danke43, alt: "REVLON" },
    { path: danke44, alt: "REVLON" },
    { path: danke45, alt: "Santa Teresa" },
    { path: danke46, alt: "Santa Teresa" },
    { path: danke47, alt: " " },
    { path: danke48, alt: "SMG" },
    { path: danke49, alt: "WEDDING" },
    { path: danke50, alt: "WINDSOR jantar principe e princesa dinamarca" },
    { path: danke51, alt: "WINDSOR jantar principe e princesa dinamarca" },
  ];
  

  useEffect(()=>{
    ;(()=>{
        try {
            window.addEventListener('resize', () => {setLargura(window.innerWidth)})
            window.removeEventListener('resize', () => {setLargura(window.innerWidth)})
        } catch (error) {
            console.warn(error)
        }finally{
            setLargura(window.innerWidth)

            largura < 1200 ? setColums(2) : setColums(3)
        }
    })()
}, [largura])

  function HandleViewImage(index = 0){
    setActveViewImage((activeViewImage) => !activeViewImage)
    setIndexImage(index)
  }

  return (
    <>
      <Head>
        <title>{textsLangs.title[currentLanguage]}</title>
            
        <link rel="icon" href="/Imgs/logoDankeAntiga.png" />
        <link rel="canonical" href="https://dankeeventos.com.br/portfolio"/>

        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Danke Eventos"/>
        <meta name="description" content="Confira alguns dos eventos espetaculares criados pela Danke Eventos. De casamentos elegantes a festas corporativas memoráveis, nossa equipe experiente e dedicada transforma cada ocasião em uma experiência única. Conte conosco para tornar seu evento inesquecível e encante seus convidados com nossa criatividade, atenção aos detalhes e serviço excepcional. Entre em contato conosco e descubra como podemos transformar sua visão em realidade."/>
        <meta name="keywords" content="eventos, festas, organização de eventos, serviços de eventos, equipe experiente, momentos inesquecíveis"/>
        
        <meta property="og:title" content={textsLangs.title[currentLanguage]}/>
        <meta property="og:description" content="Confira alguns dos eventos espetaculares criados pela Danke Eventos. De casamentos elegantes a festas corporativas memoráveis, nossa equipe experiente e dedicada transforma cada ocasião em uma experiência única. Conte conosco para tornar seu evento inesquecível e encante seus convidados com nossa criatividade, atenção aos detalhes e serviço excepcional. Entre em contato conosco e descubra como podemos transformar sua visão em realidade."/>
        <meta property="og:url" content="https://dankeeventos.com.br/portfolio"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Danke Eventos"/>
      </Head>

      <SectionPortfolio className="autoPadding fixedWidth">
        <h1
          className="titulo"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          {textsLangs[currentLanguage]}
        </h1>

        <CustomMasonry columnsCount={colums} gutter={'25px'} >
          {images.map(({path, alt}, index) => (
            <div key={index}>
              <Image
                onClick={()=> HandleViewImage(index)}
                src={path}
                alt={alt}
                layout="responsive"
                objectFit="cover"
                loading="lazy"
                quality={50}
                placeholder="blur"
                blurDataURL={path.blurDataUrl}
              />
              <p>{alt}</p>
            </div>
          ))}
        </CustomMasonry>
        {
          activeViewImage && 
          <ViewImageStyle>
            <header>
              <button onClick={()=> HandleViewImage()}>Fechar</button>
            </header>
            <div>
            <Image
                src={images[indexImage].path}
                alt={images[indexImage].alt}
                layout="fill"
                objectFit="contain"
                loading="lazy"
                quality={100}
                placeholder="blur"
                blurDataURL={images[indexImage].path.blurDataUrl}
              />
            </div>
          </ViewImageStyle>
        }
      </SectionPortfolio>
    </>
  );
};

export default Portfolio;
