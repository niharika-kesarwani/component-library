import { Header, Description, CodeBlock } from "./../../documentation";
import "./ComponentWrapper.css";

const ComponentWrapper = ({ headerText, descriptionText, components }) => {
  return (
    <div className="component_wrapper">
      <Header headerText={headerText} />
      <Description descriptionText={descriptionText} />
      {components}
      <CodeBlock headerText={headerText} />
    </div>
  );
};

export { ComponentWrapper };
