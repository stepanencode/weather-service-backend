const express = require('express');
const app = express();
const moment = require('moment');
const mongoose = require('mongoose');
const constants = require('./config/constants');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

// Initialize mongoose
mongoose.connect(constants.MONGODB_CONNECTION, { useNewUrlParser: true });

// Init middleware
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// Require routes
app.use(require('./routes/user.routes'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    console.log(req.body.email, req.body.password);
    if (req.body.email && req.body.password) {
        res.send('ok');
    } else {
        res.status(400).json({msg: 'Please define email and password'})
    }
});

app.post('/register', (req, res) => {
    res.send('Hello World!');
});

app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
