import { PropsWithChildren } from "react";

interface MenuButtonTypeProps {
  id: Number;
  onMenuButtonClick: (id: Number) => void;
}

const MenuButton: React.FunctionComponent<
  PropsWithChildren<MenuButtonTypeProps>
> = ({ id, onMenuButtonClick, children }) => {
  return <button onClick={() => onMenuButtonClick(id)}>{children}</button>;
};

export default MenuButton;
