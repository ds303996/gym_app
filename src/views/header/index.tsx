import React from "react";
import { paths } from "../../routes/paths";
import Button from "../components/Button";
import LoginButton from "../components/LoginButton";

import { useKeycloak } from "@react-keycloak/web";
import LogoutButton from "../components/LogoutButton";

export const Header: React.FC = () => {
  const { keycloak, initialized } = useKeycloak();
  const isLogged = initialized && keycloak.token !== undefined;
  return (
    <div>
      <Button link={paths.base}>Home</Button>
      {isLogged ? (
        <React.Fragment>
          <Button link={paths.trainings}>Trainings</Button>
          <Button link={paths.profile}>Profile</Button>
          <Button link={paths.instructors}>Instructors</Button>
          <LogoutButton />
        </React.Fragment>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};
