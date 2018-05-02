import React, { Component } from 'react';
import TransactionsActionsForms from './TransactionsActionsForm';

export default class TransactionsActions extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="transactions-secondary-area transactions-actions">
            <p className="secondary-area-header transactions-header">Jobcoin Balance</p>
            <TransactionsActionsForms fromAddress={this.props.fromAddress} onTransactionSent={this.props.onTransactionSent} />
        </div>);
    }
}