const mongoose = require('mongoose');

const {MONGODB_URL_LIVE} = require('./environment');

mongoose.connect(MONGODB_URL_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dbMongo = mongoose.connection;
module.exports = dbMongo;