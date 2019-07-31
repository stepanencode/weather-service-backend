const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
  timestamp: {type: String, required: true},
  city: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

const Search = mongoose.model('Search', SearchSchema);

module.exports = Search;
