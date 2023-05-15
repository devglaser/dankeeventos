import React, { useState, useEffect } from "react";
import Image from "next/image";
import BucketDanke from "./APIs/BucketDanke";
import Head from "next/head";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  const [data] = BucketDanke();
  console.log(data)

  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Danke eventos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Svg/dankelogo.svg" />
      </Head>
      <h1 className="titulo">Portfólio</h1>
      
      {data && Array.isArray(data) ?
        data.map((imagem, index) => (
          <div key={index} style={{maxWidth: '398px'}}>
            <Image
            src={`https://firebasestorage.googleapis.com/v0/b/${imagem.bucket}/o/${encodeURIComponent(imagem.name)}?alt=media`}
            alt={imagem.name}
            width={389}
            height={389}
            layout="responsive"
            objectFit="cover"
            quality={75}
            loading="lazy"
            placeholder="blur"
            onLoad={() => setLoading(false)}
            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
          />
          </div>
        )) : (<>Carregando...</>)}
    </>
  );
};

export default Portfolio;
