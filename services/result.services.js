const Result = require('../models/result.model');

exports.getResults = async function (query) {
    try {
        let result = await Result.find().exec();
        return result;
    } catch (e) {
        throw Error('Error while getResults: ' + e.message)
    }
};

exports.getResult = async function (query) {
    try {
        console.log(query);
        let search = await Result.find(query).exec();
        return search;
    } catch (e) {
        throw Error('Error while getResult: ' + e.message)
    }
};

exports.createResult = async function (query) {
    try {
        let searchResult = new Result(query);
        let result = await searchResult.save();
        return result;
    } catch (e) {
        throw Error('Error while createResult: ' + e.message)
    }
};
