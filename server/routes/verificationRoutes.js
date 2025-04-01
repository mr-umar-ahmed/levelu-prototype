const express = require('express');
const { uploadImage, verifyImage } = require('../controllers/verificationController');
const router = express.Router();

router.post('/upload', uploadImage);
router.post('/verify', verifyImage);

module.exports = router;