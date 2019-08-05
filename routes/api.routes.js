const express = require('express');
const router = express.Router();

const SearchControllers = require('../controllers/search.controllers');
// const ResultControllers = require('../controllers/result.controllers');
const UserControllers = require('../controllers/user.controllers');

router.get('/search', SearchControllers.getSearches);
router.get('/search/:id', SearchControllers.getSearch);
router.post('/search', SearchControllers.createSearch);

router.get('/profile', UserControllers.getProfile);
router.patch('/profile', UserControllers.updateProfile);

router.get('/checkLogin',  UserControllers.checkLogin);

module.exports = router;
