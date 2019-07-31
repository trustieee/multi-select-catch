import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CatchSelectedOption from './CatchSelectedOption';
import CatchOptionsDialog from './CatchOptionsDialog';
import './CatchMultiSelect.css';

const CatchMultiSelect = ({ options }) => {
  const input = useRef(null);
  const button = useRef(null);
  const dropdown = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const handleClick = e => {
      e.preventDefault();
      if (
        e.target !== input.current &&
        e.target !== button.current &&
        e.target.className.indexOf('catch-option') < 0
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClick, false);

    return () => document.removeEventListener('mousedown', handleClick, false);
  }, []);

  const handleOptionClicked = option => {
    const _option = option;
    if (selected.indexOf(_option) >= 0) return;

    setSelected([...selected, _option]);
  };

  const showDropdownClicked = () => {
    setShowDropdown(!showDropdown);
  };

  const selectedOptionRemoveClicked = option => {
    const _option = option;

    setSelected([...selected].filter(o => o !== _option));
  };

  return (
    <>
      <div className="catch-multiselect">
        <div className="catch-multiselect-input-container">
          <div ref={input} className="catch-multiselect-input" />
          <div className="catch-multiselect-input-items">
            {selected.map((s, i) => (
              <CatchSelectedOption
                key={i}
                option={s}
                removeClicked={selectedOptionRemoveClicked}
              />
            ))}
          </div>
          <span className="separator" />
          <div
            className="catch-multiselect-button"
            ref={button}
            onClick={showDropdownClicked}
          >
            {showDropdown ? '^' : 'v'}
          </div>
        </div>

        {showDropdown && (
          <CatchOptionsDialog
            useRef={dropdown}
            options={options}
            optionClicked={handleOptionClicked}
          />
        )}
      </div>
    </>
  );
};

CatchMultiSelect.propTypes = {
  options: PropTypes.array.isRequired
};

export default CatchMultiSelect;
