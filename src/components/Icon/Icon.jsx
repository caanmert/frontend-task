/* eslint-disable react/prop-types */
import React from 'react';

function Icon({ fontAwesomeIconName }) {
  return (
    <i className={fontAwesomeIconName} />
  );
}

Icon.propTypes = {};

export default Icon;
