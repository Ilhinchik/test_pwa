import {RouteObject, useRoutes} from "react-router-dom";
import {IGlobalProps} from "./App.typing";
import {MainPage} from "./pages/HomePage";
import {ShipCatalogPage} from "./pages/ShipsListPage";
import {ShipPage} from "./pages/ShipPage";

export const AppRoutes = (props: IGlobalProps) => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage {...props} />,
        },
        {
            path: "ship_catalog",
            element: <ShipCatalogPage {...props} />,
        },
        {
            path: "ship/:id",
            element: <ShipPage/>,
        },
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};