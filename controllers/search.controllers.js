const SearchServices = require('../services/search.services');

exports.getSearch = async function (req, res, next) {
    try {
        const users = await SearchServices.getSearch({user: req.params.userId});
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getSearches = async function (req, res, next) {
    try {
        const users = await SearchServices.getSearches({});
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createSearch = async function (req, res, next) {
    try {
        const users = await SearchServices.createSearch(req.body);
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
