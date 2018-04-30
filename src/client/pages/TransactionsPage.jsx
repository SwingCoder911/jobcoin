import React from "react";
import ReactDom from "react-dom";
import Transactions from "../components/Transactions";

require('../transactions.html');
require('../scss/transactions.scss');

ReactDom.render(
    <Transactions />,
    document.getElementById("root")
);