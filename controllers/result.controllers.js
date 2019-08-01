const ResultServices = require('../services/result.services');

exports.getResult = async function (req, res, next) {
    try {
        const users = await ResultServices.getResult({search: req.params.searchId});
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getResults = async function (req, res, next) {
    try {
        const users = await ResultServices.getResults({});
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createResult = async function (req, res, next) {
    try {
        const users = await ResultServices.createResult(req.body);
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
