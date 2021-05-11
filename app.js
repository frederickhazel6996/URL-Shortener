let createError = require('http-errors');
let express = require('express');
let path = require('path');
let indexRouter = require('./routes/index');
let app = express();

let cors = require('cors');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('dotenv').config();

//setting cors header during development
app.use(cors());

let {
    startMongo,
    startCSRF,
    startRateLimiter,
    developmentMode,
    startUtility
} = require('./startup');

startUtility(app);
startRateLimiter(app);

//#################SETTING UP GLOBALS######################

global.dbService = require('./routes/services/db');

//###############APP Route SETUP###########################
app.use('/', indexRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
if (process.env.NODE_ENV === 'development') {
    app.use(express.static(path.join(__dirname, 'public')));
}

const mongoConnection = startMongo();

//############# catch 404 and forward to error handler###########
app.use(function (req, res, next) {
    next(createError(404));
});

developmentMode();
// ##################### error handler #################
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
module.exports.mongoConnection = mongoConnection;
