import { Heading, Text } from "./../../components";
import { CloseSharpIcon } from "./../../icons";

const CardWithDismiss = ({ title, description }) => {
  return (
    <div className="card_with_badge">
      <div className="card_with_badge_badge card_with_dismiss_dismiss">
        <CloseSharpIcon />
      </div>
      <Heading level="h2">{title}</Heading>
      <Text size="md">{description}</Text>
    </div>
  );
};

const CardWithDismissComponent = () => {
  return (
    <CardWithDismiss
      title="Title"
      description="Card content with dismiss option."
    />
  );
};

const cardWithDismissCodeText = `<CardWithDismiss\n\ttitle="Title"\n\tdescription="Card content with dismiss option."\n/>`;

export { CardWithDismissComponent, cardWithDismissCodeText };
