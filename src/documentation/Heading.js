import { ComponentWrapper } from "./../documentation";
import { HeadingComponents, headingCodeText } from "./../components";

const Heading = () => {
  return (
    <ComponentWrapper
      headerText="Heading"
      descriptionText="Heading is used to render semantic HTML heading elements."
      components={<HeadingComponents />}
      codeText={headingCodeText}
    />
  );
};

export { Heading };
