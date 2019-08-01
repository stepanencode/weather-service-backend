const express = require('express');
const app = express();
const moment = require('moment');
const mongoose = require('mongoose');
const constants = require('./config/constants');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

mongoose.connect(constants.MONGODB_CONNECTION, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use(require('./routes/user.routes'));
app.use(require('./routes/search.routes'));
app.use(require('./routes/result.routes'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
