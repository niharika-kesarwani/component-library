import { Description } from "./Description/Description";
import { Header } from "./Header/Header";

const Text = () => {
  return (
    <div className="body">
      <Header headerText="Text" />
      <Description descriptionText="Text is used to render text and paragraphs within an interface." />
    </div>
  );
};

export { Text };
