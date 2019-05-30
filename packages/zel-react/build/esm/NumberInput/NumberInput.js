import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import ZepcionsMinus from '@zlab-de/zel-react-icons/ZepiconsMinus';
import ZepiconsPlus from '@zlab-de/zel-react-icons/ZepiconsPlus';

var _ref2 = React.createElement(ZepcionsMinus, null);

var _ref3 = React.createElement(ZepiconsPlus, null);

function NumberInput(_ref) {
  var label = _ref.label,
      count = _ref.count,
      onChange = _ref.onChange,
      onPlus = _ref.onPlus,
      onMinus = _ref.onMinus,
      other = _objectWithoutProperties(_ref, ["label", "count", "onChange", "onPlus", "onMinus"]);

  var handleChange = function handleChange(event) {
    var value = parseInt(event.target.value, 10);
    var count = isNaN(value) ? 0 : value;
    onChange(count);
  };

  return React.createElement("div", _extends({
    className: "zep-numberinput"
  }, other), React.createElement(IconButton, {
    onClick: onMinus
  }, _ref2), React.createElement("label", {
    className: "zep-visually-hidden",
    htmlFor: "numberInput_".concat(label)
  }, label), React.createElement("input", {
    type: "text",
    id: "numberInput_".concat(label),
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