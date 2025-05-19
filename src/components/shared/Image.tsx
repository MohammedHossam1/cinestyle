import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string; 
  lazy?: boolean;
  fallbackSrc?: string;
}

const Image = ({
  src,
  alt,
  lazy = true,
  fallbackSrc = "",
  ...props
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      loading={lazy ? "lazy" : "eager"}
      {...props}
    />
  );
};

export default Image;
