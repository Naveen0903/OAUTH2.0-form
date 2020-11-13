var express = require('express');
var parser = require('body-parser');
var logger = require('morgan');
const path = require("path");
var usersRouter = require('./routes/users');
var app = express();
var formidable = require('express-formidable');
var cors = require('cors');
const { CORS_OPTIONS } = require('./config');

global.appRoot = path.resolve(__dirname);

app.use(cors(CORS_OPTIONS));
app.use(formidable());
app.use(logger('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use('/api', usersRouter);

module.exports = app;
