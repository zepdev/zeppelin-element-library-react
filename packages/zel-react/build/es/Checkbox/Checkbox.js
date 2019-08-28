import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (_ref) => {
  let {
    label,
    disabled,
    isChecked,
    handleChange
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["label", "disabled", "isChecked", "handleChange"]);

  return React.createElement("div", _extends({
    className: "zep-checkbox"
  }, other), React.createElement("input", {
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