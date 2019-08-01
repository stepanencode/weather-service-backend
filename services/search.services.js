const Search = require('../models/search.model');

exports.getSearches = async function (query) {
    try {
        let result = await Search.find().exec();
        return result;
    } catch (e) {
        throw Error('Error while getSearches: ' + e.message)
    }
};

exports.getSearch = async function (query) {
    try {
        console.log(query);
        let search = await Search.find(query).exec();
        return search;
    } catch (e) {
        throw Error('Error while getSearch: ' + e.message)
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
