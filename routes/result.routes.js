const express = require('express');
const router = express.Router();

const ResultControllers = require('../controllers/result.controllers');
const helpers = require('../helpers');

router.get('/results/:searchId', helpers.proctectRoute, ResultControllers.getResults);
router.post('/results', helpers.proctectRoute, ResultControllers.createResult);

module.exports = router;
