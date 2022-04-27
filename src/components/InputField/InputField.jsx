/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import React from 'react';

function InputField({
  type, onChange, placeholder, onBlur, onInvalid, required, errorMessage,
}) {
  return (
    <>
      <input
        style={{
          maxWidth: '80%', margin: '10px', height: '15px', width: '100%',
        }}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        onInvalid={onInvalid}
        required
      />
      { errorMessage && <span>{errorMessage}</span>}
    </>

  );
}

InputField.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};

InputField.defaultProps = {
  type: 'input',
  onChange: () => {},
  placeholder: 'Input',
  required: 'true',
  errorMessage: '',
};

export default InputField;
