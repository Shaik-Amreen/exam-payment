const express = require("express");
const router = express.Router();
const regsupSubject = require("../controllers/regsupSubject");
router.post('/storeRegularData',regsupSubject.storeRegData );
router.post('/storeSupplyData',regsupSubject.storeSupData );
router.post('/getRegularData',regsupSubject.getRegData);
router.post('/getSupplyData',regsupSubject.getSupData);
module.exports=router;