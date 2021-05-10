let Route = require('express').Router();

Route.get(
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

module.exports = Route;
