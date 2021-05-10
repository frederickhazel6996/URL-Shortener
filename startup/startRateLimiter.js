let rateLimit = require('express-rate-limit');
module.exports = app => {
    //#################RATE LIMITING######################
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 50
    });

    app.use(limiter);
};
