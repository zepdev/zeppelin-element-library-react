import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  label,
  disabled,
  isChecked,
  handleChange
}) => {
  return React.createElement("div", {
    className: "zep-checkbox"
  }, React.createElement("input", {
    className: "zep-checkbox__input",
    type: "checkbox",
    id: `checkbox_${label}`,
    checked: disabled ? null : isChecked,
    onChange: handleChange,
    disabled: disabled
  }), React.createElement("label", {
    className: "zep-checkbox__label",
    htmlFor: `checkbox_${label}`
  }, label));
};

process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
} : void 0;
export default Checkbox;