const express = require("express");
const {acceptInvite, getRagPickerData} = require('../controllers/ragPicker');

const router = express.Router();

router.post("/getRagPickerData", getRagPickerData)

router.post("/acceptInvite", acceptInvite);

module.exports = router;