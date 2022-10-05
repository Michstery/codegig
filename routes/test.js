const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");

// get all test
router.get('/', testController.GetAllTest );

// Add a test
router.post('/add', testController.CreateTest);

// update a gig
// router.patch('/:id', testController.updateGigs);

module.exports = router;