import React from 'react';
import ImageUploader from './ImageUploader';

const VerificationModal = ({ task, onClose }) => {
  const handleUpload = (file) => {
    console.log(`Uploading proof for ${task}:`, file);
    onClose();
  };

  return (
    <div style={{ border: '1px solid #000', padding: '1rem' }}>
      <h3>Verify Task: {task}</h3>
      <ImageUploader onUpload={handleUpload} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default VerificationModal;