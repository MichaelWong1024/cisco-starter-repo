import React from 'react';
import './Exhibit.css'; // Importing styles specifically for the Exhibit component

function Exhibit({ children, heading }) {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
}

export default Exhibit;
