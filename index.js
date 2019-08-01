const express = require('express');
const app = express();
const mongoose = require('mongoose');
const constants = require('./config/constants');
const helpers = require('./helpers');

mongoose.connect(constants.MONGODB_CONNECTION, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helpers.logger);
app.use(helpers.getUser);

app.use(require('./routes/user.routes'));
app.use(require('./routes/search.routes'));
app.use(require('./routes/result.routes'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
