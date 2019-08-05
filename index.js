const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const constants = require('./config/constants');
const helpers = require('./helpers');
const authMiddleware = require('./middlewares/auth.middleware');

mongoose.connect(constants.MONGODB_CONNECTION, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helpers.logger);
// app.use(helpers.getUser);

app.use(cors());

// app.use('/auth', authRoutes);
// app.use('/api', authRoutes);

app.use('/auth', require('./routes/auth.routes'));

app.use('/api', authMiddleware.checkAuth, require('./routes/api.routes'));
// app.use(require('./routes/result.routes'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(constants.PORT, () => console.log(`Server running on port ${constants.PORT}`));
