import React from 'react';
import PropTypes from 'prop-types';
import './CatchSelectedOption.css';

const CatchSelectedOption = ({ option, removeClicked }) => {
  const handleOnClick = () => {
    removeClicked(option);
  };

  return (
    <div className="catch-option-inside-input">
      <span>{option}</span>
      <button onClick={handleOnClick}>x</button>
    </div>
  );
};

CatchSelectedOption.propTypes = {
  option: PropTypes.string.isRequired,
  removeClicked: PropTypes.func.isRequired
};

export default CatchSelectedOption;
