import { ReactKeycloakProvider } from "@react-keycloak/web";
import React, { ReactNode, Suspense } from "react";
import LoadingElement from "../views/components/LoadingElement";
import keycloak from "./keycloak";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <Suspense fallback="">
    <Suspense fallback={<LoadingElement/>}>
      <ReactKeycloakProvider authClient={keycloak}>{children}</ReactKeycloakProvider>
    </Suspense>
  </Suspense>
);
