const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/user.controllers');
const auth = require('../helpers');

router.get('/profile/:id', auth.proctectRoute, UserControllers.getProfile);
router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.put('/profile/:id', auth.proctectRoute, UserControllers.updateProfile);

module.exports = router;
