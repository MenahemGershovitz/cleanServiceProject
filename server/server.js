const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next()
});
mongoose.connect('mongodb://localhost:27017/cleanService', { useNewUrlParser: true })
    .then(() => {
        console.log('hamdoulah t connecter');
    })
    .catch(err => {
        console.log("c'est la merde ahi: " + err);
    })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//API
const usersRouter = require('./routes/users');
const orderRouter = require('./routes/order');
app.use("/api/users", usersRouter);
app.use("/api/orders", orderRouter);


const port = process.env.PORT || 3000;
app.set('port', port)
const server = http.createServer(app);

server.listen(port, () => {
    console.log('runing on localhost: ' + port);
});