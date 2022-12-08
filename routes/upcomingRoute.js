const express = require('express')
const router = express.Router();
const controller = require('../controller/upcomingController');

router.get('/', controller.upcoming);

module.exports = router;