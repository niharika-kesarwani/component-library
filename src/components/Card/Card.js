import { Badge, Heading, Text } from "./../../components";
import {
  CardWithDismissComponent,
  cardWithDismissCodeText,
} from "./CardWithDismiss";
import {
  CardWithTextOverlayComponent,
  cardWithTextOverlayCodeText,
} from "./CardWithTextOverlay";
import "./Card.css";

const CardWithBadge = ({ title, description, badgeText, badgeColor }) => {
  return (
    <div className="card_with_badge">
      <div className="card_with_badge_badge">
        <Badge color={badgeColor}>{badgeText}</Badge>
      </div>
      <Heading level="h2">{title}</Heading>
      <Text size="md">{description}</Text>
    </div>
  );
};

const CardWithBadgeComponent = () => {
  return (
    <div className="card_component">
      <CardWithBadge
        title="Title"
        description="Card content with a badge."
        badgeText="New"
        badgeColor="danger"
      />
    </div>
  );
};

const cardWithBadgeCodeText = `<CardWithBadge\n\ttitle="Title"\n\tdescription="Card content with a badge."\n\tbadgeText="New"\n\tbadgeColor="danger"\n/>`;

export {
  CardWithBadgeComponent,
  cardWithBadgeCodeText,
  CardWithDismissComponent,
  cardWithDismissCodeText,
  CardWithTextOverlayComponent,
  cardWithTextOverlayCodeText,
};
