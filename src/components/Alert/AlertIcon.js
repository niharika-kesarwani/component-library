import {
  WarningRoundedIcon,
  CheckCircleOutlineRoundedIcon,
  WarningAmberRoundedIcon,
  InfoRoundedIcon,
} from "./../../icons";

const AlertIcon = ({ status }) => {
  let alertIcon;
  switch (status) {
    case "error":
      alertIcon = <WarningRoundedIcon />;
      break;
    case "success":
      alertIcon = <CheckCircleOutlineRoundedIcon />;
      break;
    case "warning":
      alertIcon = <WarningAmberRoundedIcon />;
      break;
    case "info":
      alertIcon = <InfoRoundedIcon />;
      break;
  }
  return <div>{alertIcon}</div>;
};

export { AlertIcon };
