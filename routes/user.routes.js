const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/user.controllers');
const helpers = require('../helpers');

router.get('/profile', helpers.proctectRoute, UserControllers.getProfile);
router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.put('/profile', helpers.proctectRoute, UserControllers.updateProfile);

module.exports = router;
