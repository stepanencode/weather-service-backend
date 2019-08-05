const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/user.controllers');
const helpers = require('../helpers');
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);

module.exports = router;
