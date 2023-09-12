import { Description } from "./Description/Description";
import { Header } from "./Header/Header";

const Heading = () => {
  return (
    <div className="body">
      <Header headerText="Heading" />
      <Description descriptionText="Heading is used to render semantic HTML heading elements." />
    </div>
  );
};

export { Heading };
