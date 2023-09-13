const CodeBlock = ({ headerText }) => {
  const codeBlockText = `${headerText[0].toLowerCase()}${headerText.slice(1)}`;
  return (
    <div>
      <h2>How to use {codeBlockText} component?</h2>
    </div>
  );
};

export { CodeBlock };
