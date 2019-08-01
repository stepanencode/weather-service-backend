const express = require('express');
const router = express.Router();

const SearchControllers = require('../controllers/search.controllers');
const helpers = require('../helpers');

router.get('/search', helpers.proctectRoute, SearchControllers.getSearches);
router.post('/search', helpers.proctectRoute, SearchControllers.createSearch);

module.exports = router;
