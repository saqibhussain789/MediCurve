const express = require('express');
const router = express.Router();
const profileController = require('../controllers/Profile.js');
const auth = require('../middlewares/auth'); // JWT middleware

router.get('/', auth, profileController.getProfile);
router.put('/', auth, profileController.updateProfile);

module.exports = router;