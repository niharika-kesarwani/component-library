import SyntaxHighLighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./CodeBlock.css";

const CodeBlock = ({ headerText, codeText }) => {
  const codeBlockText = `${headerText[0].toLowerCase()}${headerText.slice(1)}`;
  return (
    <div className="codeblock">
      <h2>How to use {codeBlockText} component?</h2>
      <SyntaxHighLighter
        language="jsx"
        style={vs2015}
        customStyle={{
          padding: "20px",
          lineHeight: "25px",
          width: "100%",
        }}
        wrapLongLines
      >
        {codeText}
      </SyntaxHighLighter>
    </div>
  );
};

export { CodeBlock };
