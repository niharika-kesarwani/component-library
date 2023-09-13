import { Heading, Text } from "./../../components";

const VerticalCard = ({ title, description, src }) => {
  return (
    <div className="vertical_card">
      <img src={src} />
      <div className="vertical_card_text">
        <Heading level="h2">{title}</Heading>
        <Text size="md">{description}</Text>
      </div>
    </div>
  );
};

const VerticalCardComponent = () => {
  return (
    <VerticalCard
      title="Vertical Card Title"
      description="Vertical card content."
      src="https://picsum.photos/150/100"
    />
  );
};

const verticalCardCodeText = `<VerticalCard\n\ttitle="Vertical Card Title"\n\tdescription="Vertical card content."\n\tsrc="https://picsum.photos/150/100"\n/>`;

export { VerticalCardComponent, verticalCardCodeText };
