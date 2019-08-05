const jwt = require('jsonwebtoken');
const constants = require('../config/constants');
const UserService = require('../services/user.services');

exports.checkAuth = function (req, res, next) {

    console.log('checkAuth middleware');
    console.log('req.headers', req.headers.token);

    try {
        const verify = jwt.verify(req.headers.token, constants.TOKEN_KEY, async (err, decoded) => {
            console.log('decoded', decoded);
            if(!decoded || err) return res.status(401).json({message: 'Unauthorized'});

            const findUser = await UserService.getProfile({_id: decoded.userId});
            req.user = findUser;
            next();
        });
    } catch (e) {
        return res.status(400).json({ status: 403, message: 'Forbidden' });
    }
};