import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const {SERVER_PORT} = require('../config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes')(app);

module.exports = {
    start: async () => {
        app.listen(SERVER_PORT, () => console.log(`[INFO] Server started on port: ${SERVER_PORT}!`))
    },
    stop: async () => {

    }
}
