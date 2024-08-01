var express = require('express');
var app = express();

var things = require('./express3.js');

app.use('/mouni',things);

app.listen(4000);