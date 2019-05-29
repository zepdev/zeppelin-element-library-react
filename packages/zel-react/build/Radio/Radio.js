"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ref2 = _react.default.createElement("span", {
  className: "zep-radio__indicator"
});

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      value = _ref.value,
      name = _ref.name,
      label = _ref.label,
      classNameProp = _ref.className;
  return _react.default.createElement("label", {
    className: (0, _clsx.default)('zep-radio', classNameProp)
  }, _react.default.createElement("input", {
    type: "radio",
    name: name,
    className: "zep-radio__input",
    value: value,
    checked: checked,
    onChange: onChange
  }), _ref2, _react.default.createElement("span", {
    className: "zep-radio__label"
  }, label || name));
};

process.env.NODE_ENV !== "production" ? Radio.propTypes = {
  className: _propTypes.default.string,
  checked: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  name: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : void 0;
var _default = Radio;
exports.default = _default;