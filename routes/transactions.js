'use strict'

const express = require('express');
let router = express.Router();
let Transaction = require('../models/transaction');
let controller = require('../controllers/transactionController');

/* GET home page. */
router.get('/', controller.getAll);

router.post('/', controller.createOne);


module.exports = router;
