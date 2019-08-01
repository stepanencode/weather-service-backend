const moment = require('moment');
const jwt = require('jsonwebtoken');
const constants = require('./config/constants');
const User = require('./models/user.model');
exports.proctectRoute = function (req,res,next){
  if(req.user){
     next();
  }
  else{
     res.status(400).json({error:'login is required'});
  }
};

exports.logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

exports.getUser = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, constants.TOKEN_KEY, function (err, payload) {
      console.log(payload);
        if (payload) {
          User.findById(payload.userId).then(
            (doc) => {
              req.user = doc;
              next()
            }
          )
        } else {
          next()
        }
    })
  } catch(e){
    next()
  }
};
