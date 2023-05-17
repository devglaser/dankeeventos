import React from "react";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import Masonry from "react-masonry-css";

import aniversario from "../../public/Imgs/portfolio/aniversario.jpg";
import avon from "../../public/Imgs/portfolio/avon.jpg";
import gala from "../../public/Imgs/portfolio/gala.jpg";
import jantar from "../../public/Imgs/portfolio/jantar.jpg";
import organizacao from "../../public/Imgs/portfolio/organizacao.jpg";
import raffo from "../../public/Imgs/portfolio/raffo.jpg";
import sax from "../../public/Imgs/portfolio/sax.jpg";

const SectionPortfolio = styled.main`
  margin-top: 95px;
`;

const CustomMasonry = styled(Masonry)`
  display: grid;
  grid-gap: 25px;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const Portfolio = () => {
  const images = [
    { src: aniversario, alt: "Aniversário" },
    { src: avon, alt: "Avon" },
    { src: gala, alt: "Gala" },
    { src: jantar, alt: "Jantar" },
    { src: organizacao, alt: "Organização" },
    { src: raffo, alt: "Raffo" },
    { src: sax, alt: "Sax" },
  ];

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
  };

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

        <CustomMasonry breakpointCols={breakpointColumnsObj}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
            />
          ))}
        </CustomMasonry>
      </SectionPortfolio>
    </>
  );
};

export default Portfolio;
