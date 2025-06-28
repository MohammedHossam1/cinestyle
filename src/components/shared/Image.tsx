import { useState } from "react";
import placeholder from "../../assets/placeholder_large_dark.jpg";
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
  fallbackSrc = placeholder,
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
