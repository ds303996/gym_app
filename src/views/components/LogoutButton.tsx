import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const LogoutButton: React.FunctionComponent = () => {
  const { keycloak } = useKeycloak();
  return <button onClick={() => keycloak.logout()}>Logout</button>;
};

export default LogoutButton;
