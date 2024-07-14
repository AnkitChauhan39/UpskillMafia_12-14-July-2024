const express = require("express");
const {updateLocation, getNearbyUsers} = require('../controllers/map');

const router = express.Router();

router.post("/updateLocation",updateLocation);

router.get("/getNearbyUsers",getNearbyUsers);

module.exports = router;