import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/global.scss";
import {Provider} from "react-redux";
import index from "./redux";

ReactDOM.render(
    <Provider store={index}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
