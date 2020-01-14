const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

mongoose.connect('mongodb+srv://danielharo:<Teste@123>@cluster0-et9hs.mongodb.net/mongodb?retryWrites=true&w=majority', 
{userNewUrlParser: true});
const app = express();

app.use(express.json());
app.use(routes);

app.listen(9000);