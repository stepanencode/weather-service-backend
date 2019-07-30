const express = require('express');
const app = express();
const moment = require('moment');
const constants = require('./config/constants');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
