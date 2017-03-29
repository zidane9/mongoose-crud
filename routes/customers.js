'use strict'

const express = require('express');
let router = express.Router();
let Customer = require('../models/customer');
let controller = require('../controllers/customerController');

/* GET home page. */
router.get('/', controller.getAll);

router.post('/', controller.createOne);

router.put('/:memberid', controller.update);

router.delete('/:memberid', controller.deleteOne);

module.exports = router;
