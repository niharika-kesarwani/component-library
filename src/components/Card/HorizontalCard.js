import { Heading, Text } from "./../../components";

const HorizontalCard = ({ title, description, src }) => {
  return (
    <div className="vertical_card horizontal_card">
      <img src={src} />
      <div className="vertical_card_text">
        <Heading level="h2">{title}</Heading>
        <Text size="md">{description}</Text>
      </div>
    </div>
  );
};

const HorizontalCardComponent = () => {
  return (
    <HorizontalCard
      title="Horizontal Card Title"
      description="Horizontal card content."
      src="https://picsum.photos/150/100"
    />
  );
};

const horizontalCardCodeText = `<HorizontalCard\n\ttitle="Horizontal Card Title"\n\tdescription="Horizontal card content."\n\tsrc="https://picsum.photos/150/100"\n/>`;

export { HorizontalCardComponent, horizontalCardCodeText };
