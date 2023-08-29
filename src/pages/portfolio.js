import React from "react";
import Image from "next/legacy/image";
import Head from "next/head";

import styled from "styled-components";

import Masonry from "react-responsive-masonry";

import { useState, useEffect } from "react";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets:['latin']})
 
import p1 from 'public/Imgs/port/p1.jpg';
import p2 from 'public/Imgs/port/p2.jpg';
import p3 from 'public/Imgs/port/p3.jpg';
import p4 from 'public/Imgs/port/p4.jpg';
import p5 from 'public/Imgs/port/p5.jpg';
import p6 from 'public/Imgs/port/p6.jpg';
import p7 from 'public/Imgs/port/p7.jpg';
import p8 from 'public/Imgs/port/p8.jpg';
import p9 from 'public/Imgs/port/p9.jpg';
import p10 from 'public/Imgs/port/p10.jpg';
import p11 from 'public/Imgs/port/p11.jpg';
import p12 from 'public/Imgs/port/p12.jpg';
import p13 from 'public/Imgs/port/p13.jpg';
import p14 from 'public/Imgs/port/p14.jpg';
import p15 from 'public/Imgs/port/p15.jpg';
import p16 from 'public/Imgs/port/p16.jpg';
import p17 from 'public/Imgs/port/p17.jpg';
import p18 from 'public/Imgs/port/p18.jpg';
import p19 from 'public/Imgs/port/p19.jpg';
import p20 from 'public/Imgs/port/p20.jpg';
import p21 from 'public/Imgs/port/p21.jpg';
import p22 from 'public/Imgs/port/p22.jpg';
import p23 from 'public/Imgs/port/p23.jpg';
import p24 from 'public/Imgs/port/p24.jpg';
import p25 from 'public/Imgs/port/p25.jpg';
import p26 from 'public/Imgs/port/p26.jpg';
import p27 from 'public/Imgs/port/p27.jpg';
import p28 from 'public/Imgs/port/p28.jpg';
import p29 from 'public/Imgs/port/p29.jpg';
import p30 from 'public/Imgs/port/p30.jpg';
import p31 from 'public/Imgs/port/p31.jpg';
import p32 from 'public/Imgs/port/p32.jpg';
import p33 from 'public/Imgs/port/p33.jpg';
import p34 from 'public/Imgs/port/p34.jpg';
import p35 from 'public/Imgs/port/p35.jpg';
import p36 from 'public/Imgs/port/p36.jpg';
import p37 from 'public/Imgs/port/p37.jpg';
import p38 from 'public/Imgs/port/p38.jpg';
import p39 from 'public/Imgs/port/p39.jpg';
import p40 from 'public/Imgs/port/p40.jpg';
import p41 from 'public/Imgs/port/p41.jpg';
import p42 from 'public/Imgs/port/p42.jpg';
import p43 from 'public/Imgs/port/p43.jpg';
import p44 from 'public/Imgs/port/p44.jpg';
import p45 from 'public/Imgs/port/p45.jpg';
import p46 from 'public/Imgs/port/p46.jpg';
import p47 from 'public/Imgs/port/p47.jpg';
import p48 from 'public/Imgs/port/p48.jpg';
import p49 from 'public/Imgs/port/p49.jpg';
import p50 from 'public/Imgs/port/p50.jpg';
import p51 from 'public/Imgs/port/p51.jpg';
import p52 from 'public/Imgs/port/p52.jpg';
import p53 from 'public/Imgs/port/p53.jpg';
import p54 from 'public/Imgs/port/p54.jpg';
import p55 from 'public/Imgs/port/p55.jpg';
import p56 from 'public/Imgs/port/p56.jpg';
import p57 from 'public/Imgs/port/p57.jpg';
import p58 from 'public/Imgs/port/p58.jpg';
import p59 from 'public/Imgs/port/p59.jpg';
import p60 from 'public/Imgs/port/p60.jpg';
import p61 from 'public/Imgs/port/p61.jpg';
import p62 from 'public/Imgs/port/p62.jpg';
import p63 from 'public/Imgs/port/p63.jpg';
import p64 from 'public/Imgs/port/p64.jpg';
import p65 from 'public/Imgs/port/p65.jpg';
import p66 from 'public/Imgs/port/p66.jpg';
import p67 from 'public/Imgs/port/p67.jpg';
import p68 from 'public/Imgs/port/p68.jpg';
import p69 from 'public/Imgs/port/p69.jpg';
import p70 from 'public/Imgs/port/p70.jpg';
import p71 from 'public/Imgs/port/p71.jpg';
import p72 from 'public/Imgs/port/p72.jpg';
import p73 from 'public/Imgs/port/p73.jpg';
import p74 from 'public/Imgs/port/p74.jpg';
import p75 from 'public/Imgs/port/p75.jpg';
import p76 from 'public/Imgs/port/p76.jpg';
import p77 from 'public/Imgs/port/p77.jpg';
import p78 from 'public/Imgs/port/p78.jpg';
import p79 from 'public/Imgs/port/p79.jpg';
import p80 from 'public/Imgs/port/p80.jpg';
import p81 from 'public/Imgs/port/p81.jpg';
import p82 from 'public/Imgs/port/p82.jpg';
import p83 from 'public/Imgs/port/p83.jpg';
import p84 from 'public/Imgs/port/p84.jpg';
import p85 from 'public/Imgs/port/p85.jpg';
import p86 from 'public/Imgs/port/p86.jpg';
import p87 from 'public/Imgs/port/p87.jpg';
import p88 from 'public/Imgs/port/p88.jpg';
import p89 from 'public/Imgs/port/p89.jpg';
import p90 from 'public/Imgs/port/p90.jpg';
import p91 from 'public/Imgs/port/p91.jpg';
import p92 from 'public/Imgs/port/p92.jpg';
import p93 from 'public/Imgs/port/p93.jpg';
import p94 from 'public/Imgs/port/p94.jpg';
import p95 from 'public/Imgs/port/p95.jpg';
import p96 from 'public/Imgs/port/p96.jpg';
import p97 from 'public/Imgs/port/p97.jpg';
import p98 from 'public/Imgs/port/p98.jpg';
import p99 from 'public/Imgs/port/p99.jpg';
import p100 from 'public/Imgs/port/p100.jpg';
import p101 from 'public/Imgs/port/p101.jpg';
import p102 from 'public/Imgs/port/p102.jpg';
import p103 from 'public/Imgs/port/p103.jpg';
import p104 from 'public/Imgs/port/p104.jpg';
import p105 from 'public/Imgs/port/p105.jpg';
import p106 from 'public/Imgs/port/p106.jpg';
import p107 from 'public/Imgs/port/p107.jpg';
import p108 from 'public/Imgs/port/p108.jpg';
import p109 from 'public/Imgs/port/p109.jpg';
import p110 from 'public/Imgs/port/p110.jpg';
import p111 from 'public/Imgs/port/p111.jpg';
import p112 from 'public/Imgs/port/p112.jpg';
import p113 from 'public/Imgs/port/p113.jpg';
import p114 from 'public/Imgs/port/p114.jpg';
import p115 from 'public/Imgs/port/p115.jpg';
import p116 from 'public/Imgs/port/p116.jpg';
import p117 from 'public/Imgs/port/p117.jpg';
import p118 from 'public/Imgs/port/p118.jpg';
import p119 from 'public/Imgs/port/p119.jpg';
import p120 from 'public/Imgs/port/p120.jpg';
import p121 from 'public/Imgs/port/p121.jpg';
import p122 from 'public/Imgs/port/p122.jpg';
import p123 from 'public/Imgs/port/p123.jpg';
import p124 from 'public/Imgs/port/p124.jpg';
import p125 from 'public/Imgs/port/p125.jpg';
import p126 from 'public/Imgs/port/p126.jpg';
import p127 from 'public/Imgs/port/p127.jpg';
import p128 from 'public/Imgs/port/p128.jpg';
import p129 from 'public/Imgs/port/p129.jpg';
import p130 from 'public/Imgs/port/p130.jpg';




const SectionPortfolio = styled.main`
  padding-top: 95px;
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
    { path: p1, alt: '' },
    { path: p2, alt: '' },
    { path: p3, alt: '' },
    { path: p4, alt: '' },
    { path: p5, alt: '' },
    { path: p6, alt: '' },
    { path: p7, alt: '' },
    { path: p8, alt: '' },
    { path: p9, alt: '' },
    { path: p10, alt: '' },
    { path: p11, alt: '' },
    { path: p12, alt: '' },
    { path: p13, alt: '' },
    { path: p14, alt: '' },
    { path: p15, alt: '' },
    { path: p16, alt: '' },
    { path: p17, alt: '' },
    { path: p18, alt: '' },
    { path: p19, alt: '' },
    { path: p20, alt: '' },
    { path: p21, alt: '' },
    { path: p22, alt: '' },
    { path: p23, alt: '' },
    { path: p24, alt: '' },
    { path: p25, alt: '' },
    { path: p26, alt: '' },
    { path: p27, alt: '' },
    { path: p28, alt: '' },
    { path: p29, alt: '' },
    { path: p30, alt: '' },
    { path: p31, alt: '' },
    { path: p32, alt: '' },
    { path: p33, alt: '' },
    { path: p34, alt: '' },
    { path: p35, alt: '' },
    { path: p36, alt: '' },
    { path: p37, alt: '' },
    { path: p38, alt: '' },
    { path: p39, alt: '' },
    { path: p40, alt: '' },
    { path: p41, alt: '' },
    { path: p42, alt: '' },
    { path: p43, alt: '' },
    { path: p44, alt: '' },
    { path: p45, alt: '' },
    { path: p46, alt: '' },
    { path: p47, alt: '' },
    { path: p48, alt: '' },
    { path: p49, alt: '' },
    { path: p50, alt: '' },
    { path: p51, alt: '' },
    { path: p52, alt: '' },
    { path: p53, alt: '' },
    { path: p54, alt: '' },
    { path: p55, alt: '' },
    { path: p56, alt: '' },
    { path: p57, alt: '' },
    { path: p58, alt: '' },
    { path: p59, alt: '' },
    { path: p60, alt: '' },
    { path: p61, alt: '' },
    { path: p62, alt: '' },
    { path: p63, alt: '' },
    { path: p64, alt: '' },
    { path: p65, alt: '' },
    { path: p66, alt: '' },
    { path: p67, alt: '' },
    { path: p68, alt: '' },
    { path: p69, alt: '' },
    { path: p70, alt: '' },
    { path: p71, alt: '' },
    { path: p72, alt: '' },
    { path: p73, alt: '' },
    { path: p74, alt: '' },
    { path: p75, alt: '' },
    { path: p76, alt: '' },
    { path: p77, alt: '' },
    { path: p78, alt: '' },
    { path: p79, alt: '' },
    { path: p80, alt: '' },
    { path: p81, alt: '' },
    { path: p82, alt: '' },
    { path: p83, alt: '' },
    { path: p84, alt: '' },
    { path: p85, alt: '' },
    { path: p86, alt: '' },
    { path: p87, alt: '' },
    { path: p88, alt: '' },
    { path: p89, alt: '' },
    { path: p90, alt: '' },
    { path: p91, alt: '' },
    { path: p92, alt: '' },
    { path: p93, alt: '' },
    { path: p94, alt: '' },
    { path: p95, alt: '' },
    { path: p96, alt: '' },
    { path: p97, alt: '' },
    { path: p98, alt: '' },
    { path: p99, alt: '' },
    { path: p100, alt: '' },
    { path: p101, alt: '' },
    { path: p102, alt: '' },
    { path: p103, alt: '' },
    { path: p104, alt: '' },
    { path: p105, alt: '' },
    { path: p106, alt: '' },
    { path: p107, alt: '' },
    { path: p108, alt: '' },
    { path: p109, alt: '' },
    { path: p110, alt: '' },
    { path: p111, alt: '' },
    { path: p112, alt: '' },
    { path: p113, alt: '' },
    { path: p114, alt: '' },
    { path: p115, alt: '' },
    { path: p116, alt: '' },
    { path: p117, alt: '' },
    { path: p118, alt: '' },
    { path: p119, alt: '' },
    { path: p120, alt: '' },
    { path: p121, alt: '' },
    { path: p122, alt: '' },
    { path: p123, alt: '' },
    { path: p124, alt: '' },
    { path: p125, alt: '' },
    { path: p126, alt: '' },
    { path: p127, alt: '' },
    { path: p128, alt: '' },
    { path: p129, alt: '' },
    { path: p130, alt: '' },
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
            
        <link rel="icon" href="/Imgs/dankeD.svg" />
        <link rel="canonical" href="https://dankeeventos.com.br/portfolio"/>

        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Danke Eventos"/>
        <meta name="description" content="Confira alguns dos eventos espetaculares criados pela Danke Eventos. De casamentos elegantes a festas corporativas memoráveis, nossa equipe experiente e dedicada transforma cada ocasião em uma experiência única. Conte conosco para tornar seu evento inesquecível e encante seus convidados com nossa criatividade, atenção aos detalhes e serviço excepcional. Entre em contato conosco e descubra como podemos transformar sua visão em realidade."/>
        <meta name="keywords" content="eventos, festas, organização de eventos, serviços de eventos, equipe experiente, momentos inesquecíveis"/>
        
        <meta property="og:title" content={textsLangs.title[currentLanguage]}/>
        <meta property="og:description" content="Confira alguns dos eventos espetaculares criados pela Danke Eventos. De casamentos elegantes a festas corporativas memoráveis, nossa equipe experiente e dedicada transforma cada ocasião em uma experiência única. Conte conosco para tornar seu evento inesquecível e encante seus convidados com nossa criatividade, atenção aos detalhes e serviço excepcional. Entre em contato conosco e descubra como podemos transformar sua visão em realidade."/>
        <meta property="og:url" content="https://dankeeventos.com.br/portfolio"/>
        <meta property="og:image" content="https://dankeeventos.vercel.app/Imgs/logoDankeAntiga.png"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Danke Eventos"/>
      </Head>

      <SectionPortfolio className={`autoPadding gradientBackPage ${montserrat.className}`}>
        <h1
          className="titulo"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          {textsLangs[currentLanguage]}
        </h1>

        <CustomMasonry columnsCount={colums} gutter={'25px'} >
          {images.map(({path, alt}, index) => (
            <div key={index} style={{cursor: 'zoom-in'}}>
              <Image
                onClick={()=> HandleViewImage(index)}
                src={path}
                alt={alt}
                layout="responsive"
                objectFit="cover"
                loading="lazy"
                quality={25}
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
