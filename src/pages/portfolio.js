import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getImagesFromBucket } from "./APIs/BucketDanke";

const Portfolio = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImagesFromBucket();
      setImages(images);
      setLoading(false);
    };
    fetchImages();
  }, []);

  return (
    <>
      <h1 className="titulo">Portfólio</h1>
      {loading && <h1>Carregando...</h1>}
      {images &&
        images.map((imagem, index) => (
          <div key={index} style={{maxWidth: '398px'}}>
            <Image
            src={`https://firebasestorage.googleapis.com/v0/b/${imagem.bucket}/o/${encodeURIComponent(
              imagem.name
            )}?alt=media`}
            alt={imagem.name}
            width={389}
            height={389}
            layout="responsive"
            objectFit="cover"
            quality={75}
            loading="lazy"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
          />
          </div>
        ))}
    </>
  );
};

export default Portfolio;
