const express = require('express')
const router = express.Router();
const controller = require('../controller/promosController');

router.get('/', controller.promos);

module.exports = router;