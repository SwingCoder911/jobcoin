import React, { Component } from 'react';
import { LineChart } from 'react-d3-components';
export default class TransactionsHistory extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let chartData = [{
            label: "Test",
            values: this.props.transactions.reduce((acc, current) => {
                let date = new Date(current.timestamp);
                acc.push({
                    x: (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes(),
                    y: parseFloat(current.amount)
                });
                return acc;
            }, [])
        }]
        return (<div className="transactions-primary-area transactions-history">
            <p className="transactions-header">Jobcoin History Graph</p>
            {this.props.transactions.length > 0 && <LineChart
                data={chartData}
                width={window.innerWidth / 1.5}
                height={window.innerHeight / 1.6}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>}
            {this.props.transactions.length === 0 && <p className="empty-chart">No transaction data available.</p>}
        </div>);
    }
}