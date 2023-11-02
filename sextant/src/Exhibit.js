import React from 'react';
import PropTypes from 'prop-types';
import './Exhibit.css';

const Exhibit = ({ name, children }) => (
  <div className="Exhibit">
    <h2 className="ExhibitHeading">{name}</h2>
    <div className="ExhibitContent">{children}</div>
  </div>
);

Exhibit.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Exhibit;
