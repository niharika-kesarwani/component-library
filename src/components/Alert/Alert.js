import { AlertIcon } from "./AlertIcon";
import "./Alert.css";

const Alert = ({ status, children }) => {
  let alertTextColor;
  let alertBackgroundColor;

  switch (status) {
    case "error":
      alertTextColor = "#bc0b0b";
      alertBackgroundColor = "#ff543eb5";
      break;
    case "success":
      alertTextColor = "green";
      alertBackgroundColor = "#90eec2";
      break;
    case "warning":
      alertTextColor = "#999916";
      alertBackgroundColor = "#ffed71";
      break;
    case "info":
      alertTextColor = "#2121bf";
      alertBackgroundColor = "#94e2fb";
      break;
  }

  return (
    <div
      className="alert"
      style={{ backgroundColor: alertBackgroundColor, color: alertTextColor }}
    >
      {children}
    </div>
  );
};

const AlertComponents = () => {
  return (
    <div className="alert_component">
      <Alert status="error">
        <AlertIcon status="error" />
        There was an error processing your request
      </Alert>
      <Alert status="success">
        <AlertIcon status="success" />
        Data uploaded to the server. Fire on!
      </Alert>
      <Alert status="warning">
        <AlertIcon status="warning" />
        Seems your account is about to expire, upgrade now.
      </Alert>
      <Alert status="info">
        <AlertIcon status="info" />
        The event is going live on August 30th. Get ready!
      </Alert>
    </div>
  );
};

const alertCodeText = `<Alert status="error">\n\t<AlertIcon status="error" />\n\tThere was an error processing your request\n</Alert>\n<Alert status="success">\n\t<AlertIcon status="success" />\n\tData uploaded to the server. Fire on!\n</Alert>\n<Alert status="warning">\n\t<AlertIcon status="warning" />\n\tSeems your account is about to expire, upgrade now.\n</Alert>\n<Alert status="info">\n\t<AlertIcon status="info" />\n\tThe event is going live on August 30th. Get ready!\n</Alert>`;

export { AlertComponents, alertCodeText };
