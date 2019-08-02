const mongoose = require('mongoose');

const SearchItemSchema = new mongoose.Schema({
    dateString: String,
    temperature: String,
    weatherText: String,
    weatherIcon: String
});

const SearchSchema = new mongoose.Schema({
    city: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    items: [SearchItemSchema]
},{
    timestamps: true
});

const Search = mongoose.model('Search', SearchSchema);

module.exports = Search;
