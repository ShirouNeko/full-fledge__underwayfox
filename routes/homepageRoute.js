const express = require('express')
const router = express.Router();
const controller = require('../controller/homepageController');

router.get('/', controller.homepage);

module.exports = router;