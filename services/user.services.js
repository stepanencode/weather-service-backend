const User = require('../models/user.model');

exports.getProfile = async function (query) {
    try {
        let user = await User.findById(query.id).exec();
        return user;
    } catch (e) {
        throw Error('Error while getProfile: ' + e.message)
    }
};

exports.searchProfile = async function (query) {
    try {
        let user = await User.findOne(query).exec();
        return user;
    } catch (e) {
        throw Error('Error while getProfile: ' + e.message)
    }
};

exports.createProfile = async function (query) {
    try {
        let user = new User(query);
        let result = await user.save();
        return result;
    } catch (e) {
        throw Error('Error while createProfile: ' + e.message)
    }
};

exports.updateProfile = async function (query) {
    try {
        let user = await User.findById(query.id).exec();
        user.set(query);
        let result = await user.save();
        return result;
    } catch (e) {
        throw Error('Error while updateProfile: ' + e.message)
    }
};
