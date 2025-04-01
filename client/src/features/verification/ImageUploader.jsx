import React from 'react';

const ImageUploader = ({ onUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default ImageUploader;