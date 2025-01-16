type BannerProps = {
  src: string;
  alt: string;
};

function Banner({ src, alt }: BannerProps) {

  return (
    <img className="banner" src={src} alt={alt}/>
  )
}

export default Banner;