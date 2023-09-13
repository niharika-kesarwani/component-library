import { ComponentWrapper } from "./../documentation";
import "./index.css";

const Button = () => {
  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="PrimaryButton"
        descriptionText="Button components provide various styles for different actions."
      />

      <ComponentWrapper
        headerText="LinkButton"
        descriptionText="IconButton components combine icons with text for actions."
      />

      <ComponentWrapper
        headerText="IconButton"
        descriptionText="IconButton components combine icons with text for actions."
      />

      <ComponentWrapper
        headerText="FloatingActionButton"
        descriptionText="Floating Action Button components provide quick actions for user interaction."
      />
    </div>
  );
};

export { Button };
