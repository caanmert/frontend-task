/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './formField.css';

function FormField(props) {
  const [focused, setFocused] = useState(false);
  const {
    label, errorMessage, onChange, id, icon, ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="input-field-container">
      <input
        className="input-field"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => setFocused(true)}
        focused={focused.toString()}
      />
      <i className={icon} aria-hidden="true" />
    </div>
  );
}

export default FormField;
