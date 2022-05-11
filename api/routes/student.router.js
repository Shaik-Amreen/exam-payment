const express = require("express");
var router = express.Router();
var studentdetails = require('../controllers/studentdata');
router.post('/poststudentdata',studentdetails.poststudentdata);
router.post('/sendstudentdetails',studentdetails.sendstudentdetails);
router.post('/yearsem',studentdetails.yearsem);
router.post('/updatestudentdata',studentdetails.updatestudentdata);
router.post('/sectionwise',studentdetails.sectionwise);
router.post('/departmentwise',studentdetails.departmentwise);
router.post('/updatestudentyearsem',studentdetails.updatestudentyearsem);
router.post('/examdetails',studentdetails.examdetails)
module.exports = router