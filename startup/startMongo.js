let mongoose = require('mongoose');
let chalk = require('chalk');
//####################Setting up Mongoose Connection#################

module.exports = () => {
    if (process.env.NODE_ENV === 'production') {
        console.log(chalk.bgGreenBright('PRODUCTION MONGO'));
        mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    if (process.env.NODE_ENV !== 'production') {
        console.log(chalk.bgGreenBright('DEVELOPMENT or TESTING MONGO'));
        mongoose.connect(process.env.URI2, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Mongoose Connected');
    });

    return db;
};
