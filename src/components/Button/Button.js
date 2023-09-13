import { IconButtonComponents, iconButtonCodeText } from "./IconButton";
import {
  FloatingActionButtonComponents,
  floatingActionButtonCodeText,
} from "./FloatingActionButton";
import "./Button.css";

const PrimaryButton = ({ children }) => {
  return <button className="primary_button">{children}</button>;
};

const SecondaryButton = ({ children }) => {
  return <button className="secondary_button">{children}</button>;
};

const Button = ({ children }) => {
  return <button>{children}</button>;
};

const LinkButton = ({ children }) => {
  return <button className="link_button">{children}</button>;
};

const ButtonComponents = () => {
  return (
    <div className="button_component">
      <PrimaryButton>Solid Button</PrimaryButton>
      <SecondaryButton>Outline Button</SecondaryButton>
      <Button>Ghost Button</Button>
      <LinkButton>Link Button</LinkButton>
    </div>
  );
};

const buttonCodeText = `<PrimaryButton>Solid Button</PrimaryButton>\n<SecondaryButton>Outline Button</SecondaryButton>\n<Button>Ghost Button</Button>\n<LinkButton>Link Button</LinkButton>`;

export {
  ButtonComponents,
  buttonCodeText,
  IconButtonComponents,
  iconButtonCodeText,
  FloatingActionButtonComponents,
  floatingActionButtonCodeText,
};
