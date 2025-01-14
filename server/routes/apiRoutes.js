const express = require('express');
const router = express.Router();
const { addUser, addDetails } = require('../controllers/controller');

// Routes
router.post('/user', addUser);
router.post('/details', addDetails);

module.exports = router;