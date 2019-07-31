import React from 'react';
import PropTypes from 'prop-types';
import './CatchOption.css';

const CatchOption = ({ value, optionClicked }) => {
  const internalOnClicked = () => {
    optionClicked(value);
  };

  return (
    <div className="catch-option" onClick={internalOnClicked}>
      {value}
    </div>
  );
};

CatchOption.propTypes = {
  value: PropTypes.string.isRequired,
  optionClicked: PropTypes.func.isRequired
};

export default CatchOption;
