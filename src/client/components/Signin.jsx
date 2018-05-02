import React, { Component } from 'react';
import SigninForm from './SigninForm';

/**
 * This component's job is to handle the main page layout for signin
 */
export default class Signin extends Component{
    render(){
        return (
            <div className="signin-container">
                <h1 className="signin-header">JobCoin Logo</h1>
                <div className="signin-form-container">
                    <h4>Welcome! Sign In With Your Jobcoin Address</h4>
                    <SigninForm />
                </div>
            </div>
        );
    }
}