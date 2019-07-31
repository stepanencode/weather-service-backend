const PORT = process.env.PORT || 5000;
const MONGODB_CONNECTION =  process.env.MONGODB_CONNECTION || 'mongodb://127.0.0.1/database';

module.exports = { PORT, MONGODB_CONNECTION };
