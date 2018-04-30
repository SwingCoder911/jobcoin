class Address{
    constructor(data){
        this.Balance = null;
        this.Transactions = null;
        this.Error = false;
        if(!data) {
            this.Error = "No data";
            return;
        }
        if(data.hasOwnProperty('balance')){
            this.Balance = parseFloat(data.balance);
        }
        if(data.hasOwnProperty('transactions')){
            this.Transactions = data.transactions;
        }
        if(this.Balance === 0 && this.Transactions.length === 0){
            this.Error = "Address not found";
        }
    }
}

module.exports = Address;