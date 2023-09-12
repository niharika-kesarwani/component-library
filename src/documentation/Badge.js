import { Header } from "./Header/Header";
import { Description } from "./Description/Description";

const Badge = () => {
  const badgeDescription =
    "The Badge component is used to highlight and display short information, labels, or statuses.";

  return (
    <div className="body">
      <Header headerText="BadgeOnIcons" />
      <Description descriptionText={badgeDescription} />

      <Header headerText="BadgeOnAvatars" />
      <Description descriptionText={badgeDescription} />
    </div>
  );
};

export { Badge };
