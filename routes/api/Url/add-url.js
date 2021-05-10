let Route = require('express').Router();
let { validationResult } = require('express-validator');
let spawn = require('spawn-password');
let authentication = require('../../services/middlewares/jwt');
let validator = require('./urlValidators');
let moment = require('moment');

Route.post(
    '/',

    validator.addUrlChecker,
    async function (req, res) {
        try {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const db = dbService;
            let { url } = req.body;
            let foundIdentifier = true;
            let urlIdentifier;
            while (foundIdentifier) {
                urlIdentifier = spawn.spawnAlphaNumericLength(7).toUpperCase();
                foundIdentifier = await db.findUrl({
                    url_identifier: urlIdentifier
                });
                console.log(foundIdentifier);
                if (foundIdentifier === null) {
                    foundIdentifier = false;
                }
            }
            let args = {
                original_url: url,
                url_identifier: urlIdentifier,
                date_created: moment().format('MMMM Do YYYY')
            };

            await db.addUrl(args);
            let shortUrl = `${process.env.BASE_URL}${urlIdentifier}`;
            return res.status(201).send({ url: shortUrl });
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = Route;
