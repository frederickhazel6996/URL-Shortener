let { check, param } = require('express-validator');
let addUrlChecker = [
    check('url', 'url should not be empty').not().isEmpty().isString().isURL()
];
let getUrlChecker = [
    param('short_url', 'url should not be empty')
        .not()
        .isEmpty()
        .isString()
        .isURL()
];

module.exports = { addUrlChecker, getUrlChecker };
