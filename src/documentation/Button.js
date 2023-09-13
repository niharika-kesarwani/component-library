import { ComponentWrapper } from "./../documentation";
import {
  ButtonComponents,
  buttonCodeText,
  IconButtonComponents,
  iconButtonCodeText,
  FloatingActionButtonComponents,
  floatingActionButtonCodeText,
} from "./../components";
import "./index.css";

const Button = () => {
  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="Button"
        descriptionText="Button components provide various styles for different actions."
        components={<ButtonComponents />}
        codeText={buttonCodeText}
      />

      <ComponentWrapper
        headerText="IconButton"
        descriptionText="IconButton components combine icons with text for actions."
        components={<IconButtonComponents />}
        codeText={iconButtonCodeText}
      />

      <ComponentWrapper
        headerText="FloatingActionButton"
        descriptionText="Floating Action Button components provide quick actions for user interaction."
        components={<FloatingActionButtonComponents />}
        codeText={floatingActionButtonCodeText}
      />
    </div>
  );
};

export { Button };
