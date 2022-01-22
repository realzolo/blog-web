import React, {Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import Loading from "./components/Loading";
import {routes} from "./router";

function App() {
    const _routes = useRoutes(routes);
    return (
        <Suspense fallback={<Loading/>}>
            {_routes}
        </Suspense>
    );
}

export default App;
