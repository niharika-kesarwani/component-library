import { Header } from "./Header/Header";
import { Description } from "./Description/Description";
import "./index.css";

const Avatar = () => {
  return (
    <div className="body">
      <Header headerText="Avatar" />
      <Description descriptionText="The Avatar component displays an image representing a user or entity, along with a name." />
    </div>
  );
};

export { Avatar };
