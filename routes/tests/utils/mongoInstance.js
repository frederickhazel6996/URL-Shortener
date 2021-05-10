module.exports = async mongooseConnection => {
    return new Promise((resolve, reject) => {
        try {
            if (!mongooseConnection.db) resolve();
            mongooseConnection.db.dropDatabase(err => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });
};
