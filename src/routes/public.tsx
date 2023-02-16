import React from "react";

const NotFoundPage = React.lazy(() => import('../features/notfound/index').then((module) => ({ default: module["NotFoundPage"]})))

export const publicRoutes = [
    {
        path: "*",
        element: <NotFoundPage/>
    }
]