import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, disabled, isChecked, handleChange, ...other }) => {
  return (
    <>
      <input
        className="zep-checkbox"
        type="checkbox"
        id={`checkbox_${label}`}
        checked={disabled ? null : isChecked}
        onChange={handleChange}
        disabled={disabled}
        {...other}
      />
      <label className="zep-checkbox__label" htmlFor={`checkbox_${label}`}>
        {label}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;
