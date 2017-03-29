'use strict'

const express = require('express');
let router = express.Router();
let Book = require('../models/book');
let controller = require('../controllers/bookController');

/* GET home page. */
router.get('/', controller.getAll);

router.post('/', controller.createOne);

router.put('/:isbn', controller.update);

router.delete('/:isbn', controller.deleteOne);


module.exports = router;
