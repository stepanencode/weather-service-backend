const mongoose = require('mongoose');
const constants = require('../config/constants');

const ResultSchema = new mongoose.Schema({
  temperature: {type: Number, required: true},
  icon: {type: String, required: true, enum: constants.ICONS},
  timestamp: {type: String, required: true},
  condition: {type: String, required: true, enum: constants.CONDITIONS},
  search: {type: mongoose.Schema.Types.ObjectId, ref: 'Search', required: true}
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
