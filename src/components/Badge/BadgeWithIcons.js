import { MailIcon } from "./../../icons";

const BadgeWithIcons = ({ badgeContent, color, children }) => {
  let badgeColor;
  switch (color) {
    case "primary":
      badgeColor = "#0D6EFD";
      break;
    case "secondary":
      badgeColor = "#6C757D";
      break;
    case "success":
      badgeColor = "#198754";
      break;
    case "danger":
      badgeColor = "#DC3545";
      break;
    case "warning":
      badgeColor = "#FFC107";
      break;
    case "info":
      badgeColor = "#0DCAF0";
      break;
    case "light":
      badgeColor = "#F8F9FA";
      break;
    case "dark":
      badgeColor = "#212529";
      break;
  }
  return (
    <div className="badge_with_icons">
      <div>{children}</div>
      <div
        className="badge_with_icons_content"
        style={{ backgroundColor: badgeColor }}
      >
        {badgeContent}
      </div>
    </div>
  );
};

const BadgeWithIconsComponents = () => {
  return (
    <div className="badge_component">
      <BadgeWithIcons badgeContent={4} color="primary">
        <MailIcon color="action" />
      </BadgeWithIcons>
      <BadgeWithIcons badgeContent={9} color="secondary">
        <MailIcon color="action" />
      </BadgeWithIcons>
      <BadgeWithIcons badgeContent={7} color="success">
        <MailIcon color="action" />
      </BadgeWithIcons>
    </div>
  );
};

const badgeWithIconsCodeText = `<Badge badgeContent={4} color="primary">\n\t<MailIcon color="action" />\n</Badge>\n<Badge badgeContent={9} color="secondary">\n\t<MailIcon color="action" />\n</Badge>\n<Badge badgeContent={7} color="success">\n\t<MailIcon color="action" />\n</Badge>`;

export { BadgeWithIconsComponents, badgeWithIconsCodeText };
