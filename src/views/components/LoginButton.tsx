import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const LoginButton: React.FunctionComponent = () => {
  const { keycloak } = useKeycloak();
  return <button onClick={() => keycloak.login()}>Login</button>;
};

export default LoginButton;
