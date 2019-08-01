const UserServices = require('../services/user.services');

exports.getProfile = async function (req, res, next) {
    try {
        const users = await UserServices.getProfile({id: req.params.id})
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getProfiles = async function (req, res, next) {
    try {
        const users = await UserServices.getProfiles({});
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createProfile = async function (req, res, next) {
    try {
        const users = await UserServices.createProfile(req.body);
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.updateProfile = async function (req, res, next) {
    try {
        const users = await UserServices.updateProfile({...req.body, id: req.params.id});
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
