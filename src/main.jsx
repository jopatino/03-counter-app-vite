import React from "react";
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from "./HelloWorldApp.jsx";
import {FirstApp} from "./FirstApp.jsx";
import './styles.css';

const root = ReactDOM.createRoot( document.getElementById('root') );

root.render(
    <React.StrictMode>
        {/*<HelloWorldApp/>*/}
        <FirstApp title="Hola soy Jose" subTitle={123} />
    </React.StrictMode>
)
