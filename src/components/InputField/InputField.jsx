import PropTypes from 'prop-types';

import React from 'react';

function InputField({
  type, onChange, placeholder,
}) {
  return (
    <input
      style={{ maxWidth: '100%', margin: '10px', height: '25px' }}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />

  );
}

InputField.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  type: 'input',
  onChange: () => {},
  placeholder: 'Input',
};

export default InputField;
