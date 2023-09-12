import { Description } from "./Description/Description";
import { Header } from "./Header/Header";

const Alert = () => {
  return (
    <div className="body">
      <Header headerText="Alert" />
      <Description descriptionText="The Alert component is used to display various types of messages with different statuses." />
    </div>
  );
};

export { Alert };
