import SyntaxHighLighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./CodeBlock.css";

const CodeBlock = ({ headerText, codeText }) => {
  const codeBlockText = `${headerText[0].toLowerCase()}${headerText.slice(1)}`;
  return (
    <div className="codeblock">
      <h2>How to use {codeBlockText} component?</h2>
      <SyntaxHighLighter
        language="jsx"
        style={stackoverflowDark}
        customStyle={{ padding: "20px 40px", lineHeight: "25px" }}
      >
        {codeText}
      </SyntaxHighLighter>
    </div>
  );
};

export { CodeBlock };
