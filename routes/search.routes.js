const express = require('express');
const router = express.Router();

const SearchControllers = require('../controllers/search.controllers');

router.get('/searches', SearchControllers.getSearches);
router.get('/search/:userId', SearchControllers.getSearch);
router.post('/search', SearchControllers.createSearch);

module.exports = router;
