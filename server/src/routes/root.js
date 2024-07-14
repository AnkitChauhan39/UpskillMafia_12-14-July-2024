const express = require("express");
const root = require('../controllers/root');

const router = express.Router();

router.get("/",root);

module.exports = router;