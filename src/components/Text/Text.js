import "./Text.css";

const Text = ({ size, children }) => {
  let fontSize = 0;
  switch (size) {
    case "6xl":
      fontSize = "48px";
      break;
    case "5xl":
      fontSize = "42px";
      break;
    case "4xl":
      fontSize = "36px";
      break;
    case "3xl":
      fontSize = "30px";
      break;
    case "2xl":
      fontSize = "24px";
      break;
    case "xl":
      fontSize = "20px";
      break;
    case "lg":
      fontSize = "18px";
      break;
    case "md":
      fontSize = "16px";
      break;
    case "sm":
      fontSize = "14px";
      break;
    case "xs":
      fontSize = "12px";
      break;
  }
  return <div style={{ fontSize }}>{children}</div>;
};

const TextComponents = () => {
  return (
    <div className="text_component">
      <Text size="6xl">(6xl) In love with React & Next</Text>
      <Text size="5xl">(5xl) In love with React & Next</Text>
      <Text size="4xl">(4xl) In love with React & Next</Text>
      <Text size="3xl">(3xl) In love with React & Next</Text>
      <Text size="2xl">(2xl) In love with React & Next</Text>
      <Text size="xl">(xl) In love with React & Next</Text>
      <Text size="lg">(lg) In love with React & Next</Text>
      <Text size="md">(md) In love with React & Next</Text>
      <Text size="sm">(sm) In love with React & Next</Text>
      <Text size="xs">(xs) In love with React & Next</Text>
    </div>
  );
};

const textCodeText = `<Text size="6xl">(6xl) In love with React & Next</Text>\n<Text size="5xl">(5xl) In love with React & Next</Text>\n<Text size="4xl">(4xl) In love with React & Next</Text>\n<Text size="3xl">(3xl) In love with React & Next</Text>\n<Text size="2xl">(2xl) In love with React & Next</Text>\n<Text size="xl">(xl) In love with React & Next</Text\n<Text size="lg">(lg) In love with React & Next</Text>\n<Text size="md">(md) In love with React & Next</Text>\n<Text size="sm">(sm) In love with React & Next</Text\n<Text size="xs">(xs) In love with React & Next</Text>`;

export { TextComponents, textCodeText };
