const APIRouter = require('express').Router();

APIRouter.use('/url', require('./Url'));

module.exports = APIRouter;
