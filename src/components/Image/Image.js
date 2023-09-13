import "./Image.css";

const Image = ({ srcImg, text }) => {
  return <img src={srcImg} alt={text} />;
};

const ImageComponent = () => {
  return <Image srcImg="https://picsum.photos/800/400" text="Image1" />;
};

const imageCodeText = `<Image srcImg="https://picsum.photos/800/400" text="Image1" />`;

const RoundImage = ({ srcImg, text }) => {
  return <img src={srcImg} alt={text} className="round_image" />;
};

const RoundImageComponent = () => {
  return <RoundImage srcImg="https://picsum.photos/200" text="Image2" />;
};

const roundImageCodeText = `<RoundImage srcImg="https://picsum.photos/200" text="Image2" />`;

export {
  ImageComponent,
  imageCodeText,
  RoundImageComponent,
  roundImageCodeText,
};
