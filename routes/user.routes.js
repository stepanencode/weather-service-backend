const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/user.controllers')

router.get('/profiles', UserControllers.getProfiles)
router.get('/profile/:id', UserControllers.getProfile)
router.post('/profile', UserControllers.createProfile)

module.exports = router;
