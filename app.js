const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { PORT, MONGODB_URL_LIVE, dbMongo } = require('./config/index.config');
const localPort = PORT || 9000;

const studentRouter = require('./routes/student/index.controllerStudent')

console.log("port: ", PORT);
console.log("MONGODB_URL_LIVE: ", MONGODB_URL_LIVE);

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('hello your connection has successful')
});

app.use('/Student',studentRouter)

if (dbMongo) {
    app.listen(localPort, ()=>{
        console.log(`server run on port: ${localPort}`);
    });
} else {
    console.log('your connection failed');
};
