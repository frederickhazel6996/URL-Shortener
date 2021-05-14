let express = require('express');
const app = express();
const { query, param } = require('express-validator');

app.use(express.json());
require('dotenv').config();
app.use([param('*').trim().escape(), query('*').trim().escape()]);

//This route handles all requests
app.use('/api', require('./api'));

//This route redirects to correct url
app.get(
    '/:short_url',

    async function (req, res) {
        try {
            const db = dbService;
            let { short_url: shortUrl } = req.params;
            let args = { url_identifier: shortUrl };
            let urlData = await db.findUrl(args);

            if (urlData === null)
                return res.status(200).send({
                    message: 'URL does not exist or has been deleted'
                });

            return res.redirect(urlData.original_url);
        } catch (e) {
            return res.status(500);
        }
    }
);

module.exports = app;
