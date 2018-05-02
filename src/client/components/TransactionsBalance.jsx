import React, { Component } from 'react';

/**
 * Handle balance area for transactions
 */
export default class TransactionsBalance extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="transactions-secondary-area transactions-balance">
            <p className="secondary-area-header transactions-header">Jobcoin Balance</p>
            <p className="transactions-balance-value">${this.props.balance}</p>
        </div>);
    }
}