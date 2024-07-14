const express = require("express");
const {inviteRagPicker, getUserData} = require('../controllers/user');

const router = express.Router();

router.post("/getUserData",getUserData)

router.post("/inviteRagPicker",inviteRagPicker);

module.exports = router;