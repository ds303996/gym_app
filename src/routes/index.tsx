import { useRoutes } from "react-router-dom";
import { paths } from "./paths";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useKeycloak } from "@react-keycloak/web";
import { MainPage } from "../features/mainpage";

const commonRouters = [{ path: paths.base , element: <MainPage /> }];

export const AppRoutes = () => {
  const { keycloak, initialized } = useKeycloak();
  const isLoggedIn = initialized && keycloak.token !== undefined;

  const routes = isLoggedIn ? protectedRoutes : publicRoutes;
  const element = useRoutes([...commonRouters, ...routes]);

  console.log(routes, isLoggedIn, keycloak.authenticated, keycloak, initialized, element);

  return <>{element}</>;
};
