const dbMongo = require('./db');
const { PORT, MONGODB_URL_LIVE } = require('./environment');

module.exports = {
    dbMongo,
    PORT,
    MONGODB_URL_LIVE,
};