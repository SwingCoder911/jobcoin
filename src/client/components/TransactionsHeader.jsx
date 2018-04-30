import React, { Component } from 'react';

export default class TransactionsHeader extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<header className="header">
            <h1>JobCoin Sender</h1>
            <div className="address-section">
                <img className="address-section-item address-user-icon" src="/images/user.png" />
                <a className="address-section-item address-user-link" href="/">Sign Out</a>
            </div>
        </header>);
    }
}