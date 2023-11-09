import { createBrowserRouter } from "react-router-dom";
import { Layout, Home, Characters, Planets, Starships, CharacterDetail, PlanetDetail, StarshipDetail } from "./index"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/characters/:pag",
                element: <Characters />
            },
            {
                path: "/character/:id",
                element: <CharacterDetail />
            },
            {
                path: "/planets/:pag",
                element: <Planets />
            },
            {
                path: "/planet/:id",
                element: <PlanetDetail />
            },
            {
                path: "/starships/:pag",
                element: <Starships />
            },
            {
                path: "/starship/:id",
                element: <StarshipDetail />
            }

        ]
    }
]);

export default router;