const axios                         = require('axios');
const stringTemplate                = require('string-template');
const CircularJSON                  = require('circular-json');
const addressTransactionsListUrl    = "http://jobcoin.gemini.com/childhood/api/addresses/{0}";
const transactionsUrl               = "http://jobcoin.gemini.com/childhood/api/transactions";

class JobCoin{
    call(url, method, formData = null){
        let options = {
            url, method,
            headers: {
                'Content-Type': "application/json"
            }
        };
        if(formData !== null){
            options['data'] = formData;
        }
        return axios(options);
    }
    GetTransactionsForAddress(inputAddress){
        return new Promise((resolve, reject) => {
            if(!inputAddress){
                return reject("Bad address");
            }
            let url = stringTemplate(addressTransactionsListUrl, inputAddress);
            this.call(url, 'GET')
                .then(result => {
                    resolve(result.data);
                })
                .catch(error => {
                    reject(error)
                })
        });        
    }
    GetTransactionList(){
        return new Promise((resolve, reject) => {            
            this.call(transactionsUrl, 'GET')
                .then(result => {
                    resolve(result.data);
                })
                .catch(error => {
                    reject(error)
                })
        });        
    }
    AddTransaction(fromAddress, toAddress, amount){
        return new Promise((resolve, reject) => {            
            this.call(transactionsUrl, 'POST', {fromAddress, toAddress, amount})
                .then(result => {
                    resolve(result.data);
                })
                .catch(error => {
                    reject(error)
                })
        });      
    }
}
module.exports = JobCoin;