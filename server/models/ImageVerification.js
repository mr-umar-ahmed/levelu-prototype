const mongoose = require('mongoose');

const imageVerificationSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  imageUrl: String,
  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model('ImageVerification', imageVerificationSchema);