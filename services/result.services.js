const Result = require('../models/result.model');
const Search = require('../models/search.model');

exports.getResult = async function (query) {
    try {
        console.log(query);
        let search = await Search.findById(query.search).exec();
        console.log(search.user.equals(query.user._id));
        if (!search.user.equals(query.user._id)) {
          throw Error(`Search not found`)
        }
        let searchResult = await Result.find({search: query.search}).exec();
        return searchResult;
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
