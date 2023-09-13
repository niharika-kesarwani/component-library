import { Header, Description, CodeBlock } from "./../../documentation";
import "./ComponentWrapper.css";

const ComponentWrapper = ({
  headerText,
  descriptionText,
  components,
  codeText,
}) => {
  return (
    <div className="component_wrapper">
      <Header headerText={headerText} />
      <Description descriptionText={descriptionText} />
      {components}
      <CodeBlock headerText={headerText} codeText={codeText} />
    </div>
  );
};

export { ComponentWrapper };
