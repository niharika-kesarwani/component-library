import "./Heading.css";

const Heading = ({ level, children }) => {
  switch (level) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
  }
};

const HeadingComponents = () => {
  return (
    <div className="heading_component">
      <Heading level="h1">h1: Lorem ipsum</Heading>
      <Heading level="h2">h2: What is Lorem Ipsum?</Heading>
      <Heading level="h3">h3: The standard Lorem Ipsum passage.</Heading>
      <Heading level="h4">h4: The standard Lorem Ipsum passage.</Heading>
      <Heading level="h5">h5: The standard Lorem Ipsum passage.</Heading>
      <Heading level="h6">h6: The smallest headline of the page</Heading>
    </div>
  );
};

const headingCodeText = `<Heading level="h1">h1: Lorem ipsum</Heading>\n<Heading level="h2">h2: What is Lorem Ipsum?</Heading>\n<Heading level="h3">h3: The standard Lorem Ipsum passage.</Heading>\n<Heading level="h4">h4: The standard Lorem Ipsum passage.</Heading>\n<Heading level="h5">h5: The standard Lorem Ipsum passage.</Heading>\n<Heading level="h6">h6: The smallest headline of the page</Heading>`;

export { HeadingComponents, headingCodeText };
