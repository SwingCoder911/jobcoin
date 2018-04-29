let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let JobCoin = require('./server/jobCoinHandler');
let app = express();
var publicDir = path.resolve(__dirname, '../public');

let jobCoinHandler = new JobCoin();
app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', function(req, res){
    res.sendFile(publicDir + "/index.html");
});

app.get('/api/transactions', function(req, res){
    jobCoinHandler.GetTransactionList()
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error("Error: ", error);
            res
                .sendStatus(400)
                .send(error);
        });    
});

app.get('/api/addresses/:address', function(req, res){
    let inputAddress = req.params.address;
    jobCoinHandler.GetTransactionsForAddress(inputAddress)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error("Error: ", error);
            res
                .sendStatus(400)
                .send(error);
        });    
});

app.post('/api/addresses/', function(req, res){
    let { fromAddress, toAddress, amount } = req.body;
    if(!fromAddress || !toAddress || amount === undefined){
        res
            .sendStatus(400)
            .send("Missing required parameters");
        return;
    }
    jobCoinHandler.AddTransaction(fromAddress, toAddress, amount)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error("Error: ", error);
            res
                .sendStatus(400)
                .send(error);
        });    
});

app.listen(9000, function(){
    console.log("listening to this joint on port 9000");
});