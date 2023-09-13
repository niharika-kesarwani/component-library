import { ComponentWrapper } from "./../documentation";
import {
  BadgeComponents,
  badgeCodeText,
  BadgeWithIconsComponents,
  badgeWithIconsCodeText,
} from "./../components";
import "./index.css";

const Badge = () => {
  const badgeDescription =
    "The Badge component is used to highlight and display short information, labels, or statuses.";

  return (
    <div className="component_body">
      <ComponentWrapper
        headerText="Badge"
        descriptionText={badgeDescription}
        components={<BadgeComponents />}
        codeText={badgeCodeText}
      />
      <ComponentWrapper
        headerText="BadgeWithIcons"
        descriptionText={badgeDescription}
        components={<BadgeWithIconsComponents />}
        codeText={badgeWithIconsCodeText}
      />
    </div>
  );
};

export { Badge };
