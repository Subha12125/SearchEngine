const express = require('express');
const router = express.Router();
const { searchArticles } = require('../controllers/search.controller.js');

router.get('/', searchArticles);


module.exports = router;

