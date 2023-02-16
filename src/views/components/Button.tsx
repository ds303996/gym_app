import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonTypeProps {
  link: string;
}

const Button: React.FunctionComponent<
  PropsWithChildren<ButtonTypeProps>
> = ({ children, link }) => {
  const navigate = useNavigate();
  const handleNavigation = (url: any) => {navigate(url)}
  return <button onClick={() => handleNavigation(link)}>{children}</button>;
};

export default Button;
