import { Header } from "./Header/Header";
import { Description } from "./Description/Description";

const Button = () => {
  return (
    <div className="body">
      <Header headerText="PrimaryButton" />
      <Description descriptionText="Button components provide various styles for different actions." />

      <Header headerText="LinkButton" />
      <Description descriptionText="IconButton components combine icons with text for actions." />

      <Header headerText="IconButton" />
      <Description descriptionText="IconButton components combine icons with text for actions." />

      <Header headerText="FloatingActionButton" />
      <Description descriptionText="Floating Action Button components provide quick actions for user interaction." />
    </div>
  );
};

export { Button };
