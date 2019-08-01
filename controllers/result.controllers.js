const ResultServices = require('../services/result.services');

exports.getResults = async function (req, res, next) {
    try {
        const data = await ResultServices.getResult({search: req.params.searchId, user: req.user});
        return res.status(200).json({ status: 200, data: data, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createResult = async function (req, res, next) {
    try {
        const data = await ResultServices.createResult(req.body)
        return res.status(200).json({ status: 200, data: data, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
