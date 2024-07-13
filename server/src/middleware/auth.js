const express = require("express")
const {auth, getAccountType} = require('../controllers/auth');

const router = express.Router()

router.post("/",auth);

router.post("/getAccountType",getAccountType);

module.exports = router