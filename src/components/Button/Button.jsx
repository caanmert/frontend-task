/* eslint-disable react/button-has-type */
import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

function Button({ type, children, onClick }) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
