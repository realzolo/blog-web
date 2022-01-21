import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {generateRoutes} from "./utils/generate-routes";
import Loading from "./components/Loading";
import {routes} from "./router";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <Router>
                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    {generateRoutes(routes)}
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
