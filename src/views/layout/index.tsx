import React from "react";
import { Header } from "../header";

export const AppLayout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Header/>
      <div>{children}</div>
    </React.Fragment>
  );
};
