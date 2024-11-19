import {RouteObject, useRoutes} from "react-router-dom";
import {IGlobalProps} from "./App.typing";
import {HomePage} from "./pages/HomePage";
import {ShipCatalogPage} from "./pages/ShipsListPage";
import {ShipPage} from "./pages/ShipPage";

export const AppRoutes = (props: IGlobalProps) => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <HomePage {...props} />,
        },
        {
            path: "ships",
            element: <ShipCatalogPage {...props} />,
        },
        {
            path: "ships/:id",
            element: <ShipPage/>,
        },
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};