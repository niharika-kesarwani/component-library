import {
  BadgeWithIconsComponents,
  badgeWithIconsCodeText,
} from "./BadgeWithIcons";
import "./Badge.css";

const Badge = ({ color, children }) => {
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
    <div
      className="badge"
      style={{
        backgroundColor: badgeColor,
        color: color === "light" ? "#000" : null,
      }}
    >
      {children}
    </div>
  );
};

const BadgeComponents = () => {
  return (
    <div className="badge_component">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="dark">Dark</Badge>
    </div>
  );
};

const badgeCodeText = `<Badge color="primary">Primary</Badge>\n<Badge color="secondary">Secondary /></Badge>\n<Badge color="success">Success</Badge>\n<Badge color="danger">Danger /></Badge>\n<Badge color="warning">Warning /></Badge>\n<Badge color="info">Info /></Badge>\n<Badge color="light">Light /></Badge>\n<Badge color="dark">Dark /></Badge>`;

export {
  Badge,
  BadgeComponents,
  badgeCodeText,
  BadgeWithIconsComponents,
  badgeWithIconsCodeText,
};
