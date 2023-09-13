import "./Avatar.css";

const AvatarComponent = ({ size, name, src }) => {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <img className="avatar_img" src={src} alt={name} />
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="avatar_component">
      <AvatarComponent
        size="25px"
        name="Hello"
        src="https://picsum.photos/200"
      />
      <AvatarComponent
        size="50px"
        name="Hello"
        src="https://picsum.photos/200"
      />
      <AvatarComponent
        size="75px"
        name="Hello"
        src="https://picsum.photos/200"
      />
    </div>
  );
};

export { Avatar };
