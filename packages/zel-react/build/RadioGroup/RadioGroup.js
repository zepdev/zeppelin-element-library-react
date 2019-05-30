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

var _clsx = _interopRequireDefault(require("clsx"));

var RadioGroup = function RadioGroup(_ref) {
  var title = _ref.title,
      children = _ref.children,
      classNameProp = _ref.className,
      classNameLegend = _ref.classNameLegend,
      other = (0, _objectWithoutProperties2.default)(_ref, ["title", "children", "className", "classNameLegend"]);
  return _react.default.createElement("fieldset", (0, _extends2.default)({
    role: "group",
    "aria-labelledby": "radio_".concat(title),
    className: (0, _clsx.default)('zep-typo--normal-3', classNameProp)
  }, other), _react.default.createElement("legend", {
    id: "radio_".concat(title),
    className: classNameLegend
  }, title), children);
};

process.env.NODE_ENV !== "production" ? RadioGroup.propTypes = {
  title: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  children: _propTypes.default.array.isRequired,
  classNameLegend: _propTypes.default.string
} : void 0;
var _default = RadioGroup;
exports.default = _default;