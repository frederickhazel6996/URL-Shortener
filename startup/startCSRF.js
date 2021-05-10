const csurf = require('csurf');

module.exports = app => {
    //#################CSURF SETUP######################

    if (process.env.CSRF === 'on') {
        console.log('true');
        app.use(csurf({ cookie: { httpOnly: true } }));

        app.use(function (req, res, next) {
            res.cookie('XSRF-TOKEN', req.csrfToken());
            next();
        });

        app.use(function (err, req, res, next) {
            if (err.code !== 'EBADCSRFTOKEN') return next(err);

            // handle CSRF token errors here
            res.status(403);
            res.send('form tampered with');
        });
    }
};
