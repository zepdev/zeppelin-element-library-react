import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import ZepcionsMinus from '@zlab-de/zel-react-icons/ZepiconsMinus';
import ZepiconsPlus from '@zlab-de/zel-react-icons/ZepiconsPlus';

var _ref2 = React.createElement(ZepcionsMinus, null);

var _ref3 = React.createElement(ZepiconsPlus, null);

function NumberInput(_ref) {
  let {
    label,
    count,
    onChange,
    onPlus,
    onMinus
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["label", "count", "onChange", "onPlus", "onMinus"]);

  const handleChange = event => {
    let value = parseInt(event.target.value, 10);
    let count = isNaN(value) ? 0 : value;
    onChange(count);
  };

  return React.createElement("div", _extends({
    className: "zep-numberinput"
  }, other), React.createElement(IconButton, {
    onClick: onMinus
  }, _ref2), React.createElement("label", {
    className: "zep-visually-hidden",
    htmlFor: `numberInput_${label}`
  }, label), React.createElement("input", {
    type: "text",
    id: `numberInput_${label}`,
    className: "zep-input zep-input--number",
    value: count,
    onChange: handleChange
  }), React.createElement(IconButton, {
    onClick: onPlus
  }, _ref3));
}

process.env.NODE_ENV !== "production" ? NumberInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPlus: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
} : void 0;
export default NumberInput;