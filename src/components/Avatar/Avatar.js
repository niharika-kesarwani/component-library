import "./Avatar.css";

const Avatar = ({ size, name, src }) => {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <img className="avatar_img" src={src} alt={name} />
    </div>
  );
};

const AvatarComponents = () => {
  return (
    <div className="avatar_component">
      <Avatar size="25px" name="Image1" src="https://picsum.photos/200" />
      <Avatar size="50px" name="Image2" src="https://picsum.photos/200" />
      <Avatar size="75px" name="Image3" src="https://picsum.photos/200" />
    </div>
  );
};

const avatarCodeText = `<Avatar size="25px" name="Image1" src="https://picsum.photos/200" />\n<Avatar size="50px" name="Image2" src="https://picsum.photos/200" />\n<Avatar size="75px" name="Image3" src="https://picsum.photos/200" />`;

export { AvatarComponents, avatarCodeText };
