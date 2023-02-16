import React from "react";
import { paths } from "./paths";

const TrainingsPage = React.lazy(() =>
  import("../features/trainings/index").then((module) => ({
    default: module["TrainingsPage"],
  }))
);
const InstructorsPage = React.lazy(() =>
  import("../features/instructors/index").then((module) => ({
    default: module["InstructorsPage"],
  }))
);
const ProfilePage = React.lazy(() =>
  import("../features/profile/index").then((module) => ({
    default: module["ProfilePage"],
  }))
);
const NotFoundPage = React.lazy(() =>
  import("../features/notfound/index").then((module) => ({
    default: module["NotFoundPage"],
  }))
);

export const protectedRoutes = [
  {
    path: paths.trainings ,
    element: <TrainingsPage />,
  },
  {
    path: paths.instructors ,
    element: <InstructorsPage />,
  },
  {
    path: paths.profile ,
    element: <ProfilePage />
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  }
];
