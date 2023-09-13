import { ComponentWrapper } from "./../documentation";
import { TextComponents, textCodeText } from "./../components";

const Text = () => {
  return (
    <ComponentWrapper
      headerText="Text"
      descriptionText="Text is used to render text and paragraphs within an interface."
      components={<TextComponents />}
      codeText={textCodeText}
    />
  );
};

export { Text };
