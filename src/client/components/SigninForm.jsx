import React, { Component } from 'react';
import Api from "../lib/Api";

const ENTER_KEY = 13;

export default class SigninForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            addressValue: "",
            loading: false,
            error: ""
        };
        this.onAddressUpdated = this.onAddressUpdated.bind(this);
        this.onAddressSubmitted = this.onAddressSubmitted.bind(this);
    }
    SubmitAddress(){
        this.setState({loading: true});
        Api.ValidateAddress(this.state.addressValue)
            .then((result) => {
                document.location = '/transactions/' + this.state.addressValue;
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
            this.SubmitAddress();
        }
        this.setState({addressValue: event.target.value, error: ""});
    }
    onAddressSubmitted(){
        this.SubmitAddress();
    }
    render(){
        return (
            <div className="signin-form">
                <label className="signin-form-item">Jobcoin Address:</label>
                <input id="address-value" className="signin-form-item" onKeyUp={this.onAddressUpdated} />
                {this.state.error !== '' && <p className="error-text">{this.state.error}</p>}
                {!this.state.loading && <button className="signin-form-item address-form-submit" onClick={this.onAddressSubmitted}>Signin</button>}
                {this.state.loading && <img className="loading" src="/images/loading.gif" />}
            </div>
        );
    }
}