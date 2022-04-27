/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

function Icon({ fontAwesomeIconName, size, ...props }) {
  return (

    <i className={fontAwesomeIconName} {...props} />
  );
}

Icon.propTypes = {};

export default Icon;
