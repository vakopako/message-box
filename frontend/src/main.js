import React from 'react';
import ReactDOM from "react-dom";

import App from "./containers/App";

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("mount")
    );
});