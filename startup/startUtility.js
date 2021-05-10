let cookieParser = require('cookie-parser');
let logger = require('morgan');
let compression = require('compression');
let helmet = require('helmet');
let express = require('express');

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(compression());
    app.use(helmet());
    app.use(logger('dev'));
};
