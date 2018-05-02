import React, { Component } from 'react';
import TransactionHeader from './TransactionsHeader';
import TransactionBalance from './TransactionsBalance';
import TransactionActions from './TransactionsActions';
import TransactionHistory from './TransactionsHistory';
import Api from "../lib/Api";

/**
 * This component's job is to handle the layout of the transactions page and it's responsible for loading the entire address
 * and passing it down through the app.
 * If this were a bigger app I'd be interested in making it so that each individual component did it's own api call to get it's data.
 */

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
                // Could use a bit better error handling on the number possibly
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
            //This really ought to be a load spinner
            return null;
        }
        return (<div className="transactions-container">
            <TransactionHeader />
            <div className="transaction-main-content">
                <div className="transaction-column secondary-column">
                    <TransactionBalance balance={this.state.amount} />
                    {/* I'm really not into this concept of passing the function 'onTransactionSent' down the line but it's the easiest way to solve the problem presently */}
                    <TransactionActions fromAddress={this.state.address} onTransactionSent={this.onTransactionSent} />
                </div>
                <div className="transaction-column primary-column">
                    <TransactionHistory transactions={this.state.transactions} />
                </div>
            </div>
        </div>);
    }
}