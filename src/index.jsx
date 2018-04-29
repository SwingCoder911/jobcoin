import React from "react";
import ReactDom from "react-dom";
import App from "./client/components/App";

require('./client/index.html');

ReactDom.render(
    <App />,
    document.getElementById("root")
);