import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "@components/Title";
import routes from "./routes";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => {
                    const { path, type, title, element } = route;
                    const RouteType = type;
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <RouteType>
                                    <Title>{title}</Title>
                                    {element}
                                </RouteType>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;