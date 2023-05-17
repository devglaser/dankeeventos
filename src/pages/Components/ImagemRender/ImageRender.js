import Image from "next/image";
import { getImageSize } from "react-image-size";
import { useState, useEffect, useRef } from "react";

const ImageRender = ({ src, alt }) => {
  const imageRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const dimensions = await getImageSize(src);
        setImageDimensions(dimensions);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [src]);

  const maxImageWidth = 398;
  let width = null;
  let height = null;

  if (imageDimensions) {
    const aspectRatio = imageDimensions.width / imageDimensions.height;
    width = Math.min(imageDimensions.width, maxImageWidth);
    height = width / aspectRatio;

    console.log(width, height)
  }

  return (
    <div>
      {imageDimensions ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
          objectFit="cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect x='0' y='0' width='200' height='200' fill='%23cccccc'%3E%3C/rect%3E%3C/svg%3E`}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ImageRender;
