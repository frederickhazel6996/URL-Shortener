let Url = require('../../../../models/url');
module.exports = function (args) {
    const url = new Url(args);
    return url.save();
};
