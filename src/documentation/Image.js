import { ComponentWrapper } from "./../documentation";
import {
  ImageComponent,
  imageCodeText,
  RoundImageComponent,
  roundImageCodeText,
} from "./../components";
import "./index.css";

const Image = () => {
  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="Image"
        descriptionText="The Image component is used to display images with support for fallback."
        components={<ImageComponent />}
        codeText={imageCodeText}
      />

      <ComponentWrapper
        headerText="Round Image"
        descriptionText="The image component is used to display images in round shape."
        components={<RoundImageComponent />}
        codeText={roundImageCodeText}
      />
    </div>
  );
};

export { Image };
