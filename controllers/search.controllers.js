const SearchServices = require('../services/search.services');

exports.getSearches = async function (req, res, next) {
    try {
        const data = await SearchServices.getSearches({user: req.user.id});
        return res.status(200).json({ status: 200, data: data, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createSearch = async function (req, res, next) {
    try {
        const data = await SearchServices.createSearch({...req.body, user: req.user.id});
        return res.status(200).json({ status: 200, data: data, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
