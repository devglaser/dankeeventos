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

const Portfolio = () => {  

  const [colums, setColums] = useState(3)
  const [largura, setLargura] = useState('')

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
    { path: danke13, alt: "Evento" },
    { path: danke14, alt: "Evento" },
    { path: danke15, alt: "Evento" },
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
    { path: danke47, alt: "Evento" },
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

  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Danke eventos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Svg/dankelogo.svg" />
      </Head>

      <SectionPortfolio className="autoPadding fixedWidth">
        <h1
          className="titulo"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Confira alguns de nossos eventos
        </h1>

        <CustomMasonry columnsCount={colums} gutter={'25px'} >
          {images.map(({path, alt}, index) => (
            <div key={index}>
              <Image
                src={path}
                alt={alt}
                layout="responsive"
                objectFit="cover"
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
              />
              <p>{alt}</p>
            </div>
          ))}
        </CustomMasonry>
      </SectionPortfolio>
    </>
  );
};

export default Portfolio;
