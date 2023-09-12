import { Header } from "./Header/Header";
import { Description } from "./Description/Description";

const Card = () => {
  const cardDescription =
    "Card is a flexible component used to group and display content in a clear and concise format.";

  return (
    <div className="body">
      <Header headerText="CardWithBadge" />
      <Description descriptionText={cardDescription} />

      <Header headerText="CardWithDismiss" />
      <Description descriptionText={cardDescription} />

      <Header headerText="CardWithTextOverlay" />
      <Description descriptionText={cardDescription} />

      <Header headerText="TextOnlyCard" />
      <Description descriptionText={cardDescription} />

      <Header headerText="VerticalCard" />
      <Description descriptionText={cardDescription} />

      <Header headerText="HorizontalCard" />
      <Description descriptionText={cardDescription} />

      <Header headerText="CardWithShadow" />
      <Description descriptionText={cardDescription} />
    </div>
  );
};

export { Card };
