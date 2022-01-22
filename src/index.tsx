import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import index from "./redux";
import {BrowserRouter} from "react-router-dom";
import "./style/global.scss";

ReactDOM.render(
    <Provider store={index}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
