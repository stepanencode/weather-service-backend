const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  temperature: {type: Number, required: true},
  icon: {type: String, required: true},
  timestamp: {type: String, required: true},
  condition: {type: String, required: true},
  search: {type: Schema.Types.ObjectId, ref: 'Search', required: true}
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
