const express = require("express");
const {auth, getAccountType, verifyOTP} = require('../controllers/auth');

const router = express.Router();

router.post("/",auth);

router.post("/getAccountType",getAccountType);

router.post("/verifyOTP",verifyOTP);

module.exports = router;