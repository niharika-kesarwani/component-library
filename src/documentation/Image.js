import { ComponentWrapper } from "./../documentation";
import "./index.css";

const Image = () => {
  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="Responsive Image"
        descriptionText="The Image component is used to display images with support for fallback."
      />

      <ComponentWrapper
        headerText="Round Image"
        descriptionText="The image component is used to display images in round shape."
      />
    </div>
  );
};

export { Image };
