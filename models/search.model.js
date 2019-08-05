const mongoose = require('mongoose');
const constants = require('../config/constants');

const SearchItemSchema = new mongoose.Schema({
    dateString: {type: String, required: true, maxlength: 16},
    temperature: {type: String, required: true, maxlength: 3},
    weatherText: {type: String, required: true, enum: constants.CONDITIONS},
    weatherIcon: {type: String, required: true, enum: constants.ICONS}
});

const SearchSchema = new mongoose.Schema({
    city: {type: String, required: true, maxlength: 200},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    items: [SearchItemSchema]
},{
    timestamps: true
});

const Search = mongoose.model('Search', SearchSchema);

module.exports = Search;
