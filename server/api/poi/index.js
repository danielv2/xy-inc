'use strict';

var express = require('express');
var controller = require('./poi.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/proximidade', controller.proximidade);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;