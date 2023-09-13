import { ComponentWrapper } from "./../documentation";
import {
  CardWithBadgeComponent,
  cardWithBadgeCodeText,
  CardWithDismissComponent,
  cardWithDismissCodeText,
  CardWithTextOverlayComponent,
  cardWithTextOverlayCodeText,
  TextOnlyCardComponent,
  textOnlyCardCodeText,
  VerticalCardComponent,
  verticalCardCodeText,
  HorizontalCardComponent,
  horizontalCardCodeText,
} from "./../components";
import "./index.css";

const Card = () => {
  const cardDescription =
    "Card is a flexible component used to group and display content in a clear and concise format.";

  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="CardWithBadge"
        descriptionText={cardDescription}
        components={<CardWithBadgeComponent />}
        codeText={cardWithBadgeCodeText}
      />

      <ComponentWrapper
        headerText="CardWithDismiss"
        descriptionText={cardDescription}
        components={<CardWithDismissComponent />}
        codeText={cardWithDismissCodeText}
      />

      <ComponentWrapper
        headerText="CardWithTextOverlay"
        descriptionText={cardDescription}
        components={<CardWithTextOverlayComponent />}
        codeText={cardWithTextOverlayCodeText}
      />

      <ComponentWrapper
        headerText="TextOnlyCard"
        descriptionText={cardDescription}
        components={<TextOnlyCardComponent />}
        codeText={textOnlyCardCodeText}
      />

      <ComponentWrapper
        headerText="VerticalCard"
        descriptionText={cardDescription}
        components={<VerticalCardComponent />}
        codeText={verticalCardCodeText}
      />

      <ComponentWrapper
        headerText="HorizontalCard"
        descriptionText={cardDescription}
        components={<HorizontalCardComponent />}
        codeText={horizontalCardCodeText}
      />
    </div>
  );
};

export { Card };
