const express = require("express");
var router = express.Router();
var regsupPayment = require('../controllers/regsupPayment');
router.post('/savestudentdata',regsupPayment.savestudentdata);
router.post('/savesupplystudentdata',regsupPayment.savesupplystudentdata);
module.exports = router