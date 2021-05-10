let Url = require('../../../../models/url');
module.exports = function (args) {
    return Url.findOne(args);
};
