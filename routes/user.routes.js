const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/user.controllers');

router.get('/profiles', UserControllers.getProfiles);
router.get('/profile/:id', UserControllers.getProfile);
router.post('/profile', UserControllers.createProfile);
router.put('/profile/:id', UserControllers.updateProfile);

module.exports = router;
