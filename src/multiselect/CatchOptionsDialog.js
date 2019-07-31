import React from 'react';
import PropTypes from 'prop-types';
import CatchOption from './CatchOption';
import './CatchOptionsDialog.css';

const CatchOptionsDialog = ({ options, optionClicked }) => {
  return (
    <div className="catch-options-dialog">
      {options.map((o, i) => (
        <CatchOption key={i} value={o} optionClicked={optionClicked} />
      ))}
    </div>
  );
};

CatchOptionsDialog.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionClicked: PropTypes.func.isRequired
};

export default CatchOptionsDialog;
