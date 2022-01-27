import React, {Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import Loading from "./components/Loading";
import {routes} from "./router";

function App() {
    const elements = useRoutes(routes);
    return (
        <Suspense fallback={<Loading/>}>
            {elements}
        </Suspense>
    );
}

export default App;
