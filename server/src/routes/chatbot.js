const express = require("express");
const chatbot = require('../controllers/chatbot');

const router = express.Router();

router.post("/",chatbot);

module.exports = router;