import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store, persistor} from "./store";
import "./style/global.css";
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <BrowserRouter>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
