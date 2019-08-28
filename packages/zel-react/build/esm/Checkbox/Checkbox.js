import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      isChecked = _ref.isChecked,
      handleChange = _ref.handleChange,
      other = _objectWithoutProperties(_ref, ["label", "disabled", "isChecked", "handleChange"]);

  return React.createElement("div", _extends({
    className: "zep-checkbox"
  }, other), React.createElement("input", {
    className: "zep-checkbox__input",
    type: "checkbox",
    id: "checkbox_".concat(label),
    checked: disabled ? null : isChecked,
    onChange: handleChange,
    disabled: disabled
  }), React.createElement("label", {
    className: "zep-checkbox__label",
    htmlFor: "checkbox_".concat(label)
  }, label));
};

process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
} : void 0;
export default Checkbox;