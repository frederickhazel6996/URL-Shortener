const adminRouter = require('express').Router();
adminRouter.use('/add-url', require('./add-url'));
adminRouter.use('/get-url', require('./get-url'));

module.exports = adminRouter;
