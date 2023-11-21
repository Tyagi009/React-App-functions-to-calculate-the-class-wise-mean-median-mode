const express = require('express');
const router = express.Router();
const { getDataSet } = require('../../controllers/v1.0');
const { getDataSet } = require('../../services/v1.0/data-set.service');

router.get('/data-set', getDataSet);


module.exports = router;
