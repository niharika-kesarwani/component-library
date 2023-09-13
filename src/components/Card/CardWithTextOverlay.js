import { Heading, Text } from "./../../components";

const CardWithTextOverlay = ({ title, description, src }) => {
  return (
    <div className="card_with_text_overlay">
      <img src={src} />
      <div className="overlay">
        <Heading level="h2">{title}</Heading>
        <Text size="md">{description}</Text>
      </div>
    </div>
  );
};

const CardWithTextOverlayComponent = () => {
  return (
    <div>
      <CardWithTextOverlay
        title="Overlay Title"
        description="Card content with text overlay."
        src="https://picsum.photos/300/200"
      />
    </div>
  );
};

const cardWithTextOverlayCodeText = `<CardWithTextOverlay\n\ttitle="Overlay Title"\n\tdescription="Card content with text overlay."\n\tsrc="https://picsum.photos/300/200"\n/>`;

export { CardWithTextOverlayComponent, cardWithTextOverlayCodeText };
