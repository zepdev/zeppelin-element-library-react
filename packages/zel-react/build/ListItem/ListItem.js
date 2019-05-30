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

var ListItem = function ListItem(_ref) {
  var variant = _ref.variant,
      label = _ref.label,
      children = _ref.children,
      classNameProp = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["variant", "label", "children", "className"]);
  return _react.default.createElement("li", (0, _extends2.default)({
    className: (0, _clsx.default)('zep-list__item', variant === 'attribute' && 'zep-list__item--attribute', classNameProp)
  }, other), variant === 'attribute' && label && _react.default.createElement("span", {
    className: "zep-list__label"
  }, label), children);
};

process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  label: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['bullet', 'attribute'])
} : void 0;
var _default = ListItem;
exports.default = _default;