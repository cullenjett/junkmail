import React from 'react';

const IframeThumbnail = ({ src, className = '' }) => (
  <div className={`iframe-thumbnail ${className}`}>
    <div className="iframe-thumbnail__container">
      <iframe className="iframe-thumbnail__iframe" src={src} frameBorder="0" />
    </div>
  </div>
);

export default IframeThumbnail;
