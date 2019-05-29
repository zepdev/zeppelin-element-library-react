"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var Input = function Input(_ref) {
  var classNameProp = _ref.className,
      value = _ref.value,
      onChange = _ref.onChange,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder;
  return _react.default.createElement("div", {
    className: (0, _clsx.default)('zep-input-container', error && 'zep-input-container--error')
  }, _react.default.createElement("input", {
    type: "text",
    className: (0, _clsx.default)(classNameProp, 'zep-input'),
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    id: id
  }), _react.default.createElement("label", {
    className: "zep-input-container__label",
    htmlFor: id
  }, label), error && _react.default.createElement("label", {
    className: "zep-input-container__feedback",
    htmlFor: id
  }, errorMessage));
};

process.env.NODE_ENV !== "production" ? Input.propTypes = {
  className: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onChange: _propTypes.default.func,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  id: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string
} : void 0;
var _default = Input;
exports.default = _default;