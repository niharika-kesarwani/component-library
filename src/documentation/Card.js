import { ComponentWrapper } from "./../documentation";
import "./index.css";

const Card = () => {
  const cardDescription =
    "Card is a flexible component used to group and display content in a clear and concise format.";

  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="CardWithBadge"
        descriptionText={cardDescription}
      />

      <ComponentWrapper
        headerText="CardWithDismiss"
        descriptionText={cardDescription}
      />

      <ComponentWrapper
        headerText="CardWithTextOverlay"
        descriptionText={cardDescription}
      />

      <ComponentWrapper
        headerText="TextOnlyCard"
        descriptionText={cardDescription}
      />

      <ComponentWrapper
        headerText="VerticalCard"
        descriptionText={cardDescription}
      />

      <ComponentWrapper
        headerText="HorizontalCard"
        descriptionText={cardDescription}
      />

      <ComponentWrapper
        headerText="CardWithShadow"
        descriptionText={cardDescription}
      />
    </div>
  );
};

export { Card };
