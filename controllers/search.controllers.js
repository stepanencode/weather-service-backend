const SearchServices = require('../services/search.services');

exports.getSearch = async function (req, res) {
    try {
        const data = await SearchServices.getSearch({_id: req.params.id}, {items: true});
        return res.status(200).json({ status: 200, data: data, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getSearches = async function (req, res) {
    try {
        const data = await SearchServices.getSearches({user: req.user.id}, {items: false});
        return res.status(200).json({ status: 200, data: data, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createSearch = async function (req, res) {
    try {
        const data = await SearchServices.createSearch({...req.body, user: req.user.id});
        return res.status(200).json({ status: 200, data: data, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
