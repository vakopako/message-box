import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        React.createElement("div", null, "Hello World!"),
        document.getElementById("mount")
    );
});