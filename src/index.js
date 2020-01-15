const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(
        
"mongodb+srv://danielharo:Teste@123@cluster0-et9hs.mongodb.net/test?retryWrites=true&w=majority"
        , { 
        useNewUrlParser: true,
    }, function(err, db) {

    });
    
    const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);