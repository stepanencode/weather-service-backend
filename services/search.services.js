const Search = require('../models/search.model');

exports.getSearch = async function (query, fields) {
    try {
        let search = await Search.findOne(query, fields).exec();
        return search;
    } catch (e) {
        throw Error('Error while getSearch: ' + e.message)
    }
};

exports.getSearches = async function (query, fields) {
    try {
        console.log(query);
        let search = await Search.find(query, fields).exec();
        return search;
    } catch (e) {
        throw Error('Error while getSearches: ' + e.message)
    }
};

exports.createSearch = async function (query) {
    try {
        let search = new Search(query);
        let result = await search.save();
        return result;
    } catch (e) {
        throw Error('Error while createSearch: ' + e.message)
    }
};
