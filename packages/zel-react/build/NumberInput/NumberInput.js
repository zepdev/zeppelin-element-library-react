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

var _IconButton = _interopRequireDefault(require("../IconButton/IconButton"));

var _ZepiconsMinus = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsMinus"));

var _ZepiconsPlus = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsPlus"));

var _ref2 = _react.default.createElement(_ZepiconsMinus.default, null);

var _ref3 = _react.default.createElement(_ZepiconsPlus.default, null);

function NumberInput(_ref) {
  var label = _ref.label,
      count = _ref.count,
      onChange = _ref.onChange,
      onPlus = _ref.onPlus,
      onMinus = _ref.onMinus,
      other = (0, _objectWithoutProperties2.default)(_ref, ["label", "count", "onChange", "onPlus", "onMinus"]);

  var handleChange = function handleChange(event) {
    var value = parseInt(event.target.value, 10);
    var count = isNaN(value) ? 0 : value;
    onChange(count);
  };

  return _react.default.createElement("div", (0, _extends2.default)({
    className: "zep-numberinput"
  }, other), _react.default.createElement(_IconButton.default, {
    onClick: onMinus
  }, _ref2), _react.default.createElement("label", {
    className: "zep-visually-hidden",
    htmlFor: "numberInput_".concat(label)
  }, label), _react.default.createElement("input", {
    type: "text",
    id: "numberInput_".concat(label),
    className: "zep-input zep-input--number",
    value: count,
    onChange: handleChange
  }), _react.default.createElement(_IconButton.default, {
    onClick: onPlus
  }, _ref3));
}

process.env.NODE_ENV !== "production" ? NumberInput.propTypes = {
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  onPlus: _propTypes.default.func.isRequired,
  onMinus: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func.isRequired,
  count: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
} : void 0;
var _default = NumberInput;
exports.default = _default;