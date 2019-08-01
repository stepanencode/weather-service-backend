const express = require('express');
const router = express.Router();

const ResultControllers = require('../controllers/result.controllers');

router.get('/results', ResultControllers.getResults);
router.get('/results/:searchId', ResultControllers.getResult);
router.post('/result', ResultControllers.createResult);

module.exports = router;
