import {
  DeleteIcon,
  SearchIcon,
  EditOutlinedIcon,
  AddSharpIcon,
} from "./../../icons";
import "./IconButton.css";

const IconButton = ({ iconText, color, children }) => {
  return (
    <button style={{ color }}>
      <div>{children}</div>
      <div>{iconText}</div>
    </button>
  );
};

const IconButtonComponents = () => {
  return (
    <div className="icon_button_component">
      <IconButton iconText="Delete" color="#a855f7">
        <DeleteIcon />
      </IconButton>
      <IconButton iconText="Search" color="orange">
        <SearchIcon />
      </IconButton>
      <IconButton iconText="Edit" color="#0D6EFD">
        <EditOutlinedIcon />
      </IconButton>
      <IconButton iconText="Add" color="green">
        <AddSharpIcon />
      </IconButton>
    </div>
  );
};

const iconButtonCodeText = `<IconButton iconText="Delete" color="#a855f7">\n\t<DeleteIcon />\n</IconButton>\n<IconButton iconText="Search" color="orange">\n\t<SearchIcon />\n</IconButton>\n<IconButton iconText="Edit" color="#0D6EFD">\n\t<EditOutlinedIcon />\n</IconButton>\n<IconButton iconText="Add" color="green">\n\t<AddSharpIcon />\n</IconButton>`;

export { IconButtonComponents, iconButtonCodeText };
