/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function Icon({ fontAwesomeIconName, ...props }) {
  return (
    <i className={fontAwesomeIconName} {...props} />
  );
}

Icon.propTypes = {
  fontAwesomeIconName: PropTypes.string.isRequired,
};

export default Icon;
