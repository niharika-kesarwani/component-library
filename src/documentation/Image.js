import { Description } from "./Description/Description";
import { Header } from "./Header/Header";

const Image = () => {
  return (
    <div className="body">
      <Header headerText="Responsive Image" />
      <Description descriptionText="The Image component is used to display images with support for fallback." />

      <Header headerText="Round Image" />
      <Description descriptionText="The image component is used to display images in round shape." />
    </div>
  );
};

export { Image };
