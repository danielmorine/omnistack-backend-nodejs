const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const websocket = require('socket.io');

mongoose.connect(
        
"mongodb+srv://danielharo:Teste@123@cluster0-et9hs.mongodb.net/test?retryWrites=true&w=majority"
        , { 
        useNewUrlParser: true,
    }, function(err, db) {

    });
    
const app = express();
const server = http.Server(app);

websocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000);