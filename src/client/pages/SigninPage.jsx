import React from "react";
import ReactDom from "react-dom";
import Signin from "../components/Signin";

require('../signin.html');
require('../scss/signin.scss');

ReactDom.render(
    <Signin />,
    document.getElementById("root")
);