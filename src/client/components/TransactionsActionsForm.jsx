import React, { Component } from 'react';
import Api from "../lib/Api";

const ENTER_KEY = 13;

export default class TransactionsActionsForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            destinationAddress: "",
            amount: "",
            error: false,
            loading: false
        };
        this.onAddressUpdated = this.onAddressUpdated.bind(this);
        this.onAmountUpdated = this.onAmountUpdated.bind(this);
        this.onTransactionSubmitted = this.onTransactionSubmitted.bind(this);
    }
    SubmitTransaction(){
        this.setState({loading: true});
        Api.ExecuteTransaction(this.props.fromAddress, this.state.destinationAddress, this.state.amount)
            .then((result) => {
                console.log("Execute result: ", result);
                this.setState({loading: false});
                this.props.onTransactionSent();
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: "Invalid address. Please enter another."
                });
                console.error(error);
            });
    }
    onAddressUpdated(event){
        if(event.keyCode == ENTER_KEY){
            this.SubmitTransaction();
        }
        this.setState({destinationAddress: event.target.value, error: ""});
    }
    onAmountUpdated(event){
        if(event.keyCode == ENTER_KEY){
            this.SubmitTransaction();
        }
        this.setState({amount: event.target.value, error: ""});
    }
    onTransactionSubmitted(){
        this.SubmitTransaction();
        console.log("Clicked: ", this.state);
    }
    render(){
        return (<div className="transactions-actions-form">
            <label className="actions-form-item actions-form-label">Destination Address</label>
            <input className="actions-form-item actions-form-input" onKeyUp={this.onAddressUpdated} />
            <label className="actions-form-item actions-form-label">Amount to send</label>
            <input className="actions-form-item actions-form-input" onKeyUp={this.onAmountUpdated} />
            {this.state.error !== '' && <p className="error-text">{this.state.error}</p>}
            {!this.state.loading && <button className="actions-form-item actions-form-submit" onClick={this.onTransactionSubmitted} >Send Jobcoins</button>}
            {this.state.loading && <img className="loading" src="/images/loading.gif" />}
        </div>);
    }
}