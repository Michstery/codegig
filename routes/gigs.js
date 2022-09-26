const express = require("express");
const router = express.Router();
const db = require("../database");
const Gigs = require("../models/gigs");
const gigsController = require("../controllers/gigs");

// get all gigs
router.get('/', gigsController.GetAllGigs );

// Add a gig
router.post('/add', gigsController.CreateGigs);

module.exports = router;