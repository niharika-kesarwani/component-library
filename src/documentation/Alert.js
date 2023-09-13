import { ComponentWrapper } from "./../documentation";
import { AlertComponents, alertCodeText } from "../components";

const Alert = () => {
  return (
    <ComponentWrapper
      headerText="Alert"
      descriptionText="The Alert component is used to display various types of messages with different statuses."
      components={<AlertComponents />}
      codeText={alertCodeText}
    />
  );
};

export { Alert };
