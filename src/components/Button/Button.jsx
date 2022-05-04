/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
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
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default Button;
