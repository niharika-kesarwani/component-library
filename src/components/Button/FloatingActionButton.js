import { AddSharpIcon, EditOutlinedIcon } from "./../../icons";
import "./FloatingActionButton.css";

const FloatingActionButton = ({ color, children }) => {
  return <button style={{ backgroundColor: color }}>{children}</button>;
};

const FloatingActionButtonComponents = () => {
  return (
    <div className="floating_action_button_component">
      <FloatingActionButton color="#0D6EFD">
        <AddSharpIcon />
      </FloatingActionButton>
      <FloatingActionButton color="green">
        <EditOutlinedIcon />
      </FloatingActionButton>
    </div>
  );
};

const floatingActionButtonCodeText = `<FloatingActionButton color="#0D6EFD">\n\t<AddSharpIcon />\n</FloatingActionButton>\n<FloatingActionButton color="green">\n\t<EditOutlinedIcon />\n</FloatingActionButton>`;

export { FloatingActionButtonComponents, floatingActionButtonCodeText };
