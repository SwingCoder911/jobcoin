import React, { Component } from 'react';
import TransactionHeader from './TransactionsHeader';
import TransactionBalance from './TransactionsBalance';
import TransactionActions from './TransactionsActions';
import TransactionHistory from './TransactionsHistory';

export default class Transactions extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="transactions-container">
            <TransactionHeader />
            <div className="transaction-main-content">
                <div className="secondary-column">
                    <TransactionBalance />
                    <TransactionActions />
                </div>
                <div className="primary-column">
                    <TransactionHistory />
                </div>
            </div>
            
        </div>);
    }
}