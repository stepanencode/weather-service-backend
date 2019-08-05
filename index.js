const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const constants = require('./config/constants');
const authMiddleware = require('./middlewares/auth.middleware');
const loggerMiddleware = require('./middlewares/logger.middleware');

mongoose.connect(constants.MONGODB_CONNECTION, { useNewUrlParser: true });

app.use(loggerMiddleware.logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/auth', require('./routes/auth.routes'));

app.use('/api', authMiddleware.checkAuth, require('./routes/api.routes'));

app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
