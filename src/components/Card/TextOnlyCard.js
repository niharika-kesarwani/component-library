import { Text } from "./../../components";

const TextOnlyCard = ({ description }) => {
  return (
    <div className="text_only_card">
      <Text size="md">{description}</Text>
    </div>
  );
};

const TextOnlyCardComponent = () => {
  return <TextOnlyCard description="This is a text only card." />;
};

const textOnlyCardCodeText = `<TextOnlyCard description="This is a text only card." />`;

export { TextOnlyCardComponent, textOnlyCardCodeText };
