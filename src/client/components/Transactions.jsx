import React, { Component } from 'react';
import TransactionHeader from './TransactionsHeader';
import TransactionBalance from './TransactionsBalance';
import TransactionActions from './TransactionsActions';
import TransactionHistory from './TransactionsHistory';
import Api from "../lib/Api";

const getUrlAddress = () => {
    let url = window.location.pathname;
    return url.substring(url.lastIndexOf('/') + 1);
};
export default class Transactions extends Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            address: "",
            transactions: [],
            loading: true
        };
        this.onTransactionSent = this.onTransactionSent.bind(this);
        this.RetrieveAddress();
    }
    RetrieveAddress(){
        let urlAddress = getUrlAddress();
        Api.GetAddress(urlAddress)
            .then(result => {
                let resultBalance = parseFloat(result.balance);
                this.setState({
                    loading: false,
                    address: urlAddress,
                    amount: !isNaN(resultBalance) ? resultBalance : 0,
                    transactions: result.transactions
                });
            })
            .catch(error => {
                console.error("Can't find transactions for: ", urlAddress);
            });
    }
    onTransactionSent(){
        this.RetrieveAddress();
    }
    render(){
        if(this.state.loading){
            //Show loader
            return null;
        }
        return (<div className="transactions-container">
            <TransactionHeader />
            <div className="transaction-main-content">
                <div className="transaction-column secondary-column">
                    <TransactionBalance balance={this.state.amount} />
                    <TransactionActions fromAddress={this.state.address} onTransactionSent={this.onTransactionSent} />
                </div>
                <div className="transaction-column primary-column">
                    <TransactionHistory transactions={this.state.transactions} />
                </div>
            </div>
        </div>);
    }
}