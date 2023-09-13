import { ComponentWrapper } from "./../documentation";
import "./index.css";

const Badge = () => {
  const badgeDescription =
    "The Badge component is used to highlight and display short information, labels, or statuses.";

  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="BadgeOnIcons"
        descriptionText={badgeDescription}
      />

      <ComponentWrapper
        headerText="BadgeOnAvatars"
        descriptionText={badgeDescription}
      />
    </div>
  );
};

export { Badge };
