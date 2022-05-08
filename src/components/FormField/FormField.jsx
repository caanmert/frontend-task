/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import './formField.css';
import PropTypes from 'prop-types';

function FormField(props) {
  const [focused, setFocused] = useState(false);
  const {
    label, errorMessage, onChange, iconName, shouldFieldReset, ...inputProps
  } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  useEffect(() => () => {
    setFocused(false);
  }, [shouldFieldReset]);

  return (
    <div className="input-field-container">
      <input
        className="input-field"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <i className={iconName} aria-hidden="true" />
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  iconName: PropTypes.string,
  shouldFieldReset: PropTypes.bool,
};

FormField.defaultProps = {
  label: 'Input',
  errorMessage: 'Error Message',
  onChange: () => {},
  iconName: 'fa-solid fa-user',
  shouldFieldReset: false,
};

export default FormField;
