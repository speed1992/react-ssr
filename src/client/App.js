import React from "react";
import { renderRoutes } from "react-router-config";

const App = ({ route }) => {
    return (
        <div>
            <h1>I am the header</h1>
            {renderRoutes(route.routes)}
        </div>)
}

export default { component: App }