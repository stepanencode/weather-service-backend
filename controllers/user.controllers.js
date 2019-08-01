const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserServices = require('../services/user.services');
const constants = require('../config/constants');

exports.getProfile = async function (req, res, next) {
    try {
        const data = await UserServices.getProfile({id: req.params.id})
        return res.status(200).json({ status: 200, data: {email: data.email, username: data.username}, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.register = async function (req, res, next) {
    try {
        const data = await UserServices.createProfile(req.body);
        return res.status(200).json({ status: 200, data: {email: data.email, username: data.username}, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.updateProfile = async function (req, res, next) {
    try {
        const data = await UserServices.updateProfile({...req.body, id: req.params.id});
        return res.status(200).json({ status: 200, data: {email: data.email, username: data.username}, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.login = async function (req, res, next) {
    try {
        const data = await UserServices.searchProfile({email: req.body.email});
        console.log(data);
        bcrypt.compare(req.body.password, data.password).then(function(result) {
          if (result) {
            let token = jwt.sign({userId: data.id}, constants.TOKEN_KEY);
            return res.status(200).json({ status: 200, data: {email: data.email, username: data.username}, token: token, message: "Success" });
          } else {
            res.status(400).json({message: 'Invalid password or username'});
          }
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
