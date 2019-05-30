"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      isChecked = _ref.isChecked,
      handleChange = _ref.handleChange,
      other = (0, _objectWithoutProperties2.default)(_ref, ["label", "disabled", "isChecked", "handleChange"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: "zep-checkbox"
  }, other), _react.default.createElement("input", {
    className: "zep-checkbox__input",
    type: "checkbox",
    id: "checkbox_".concat(label),
    checked: disabled ? null : isChecked,
    onChange: handleChange,
    disabled: disabled
  }), _react.default.createElement("label", {
    className: "zep-checkbox__label",
    htmlFor: "checkbox_".concat(label)
  }, label));
};

process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  label: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  isChecked: _propTypes.default.bool.isRequired,
  handleChange: _propTypes.default.func.isRequired
} : void 0;
var _default = Checkbox;
exports.default = _default;