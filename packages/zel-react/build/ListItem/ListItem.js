"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var ListItem = function ListItem(_ref) {
  var variant = _ref.variant,
      label = _ref.label,
      children = _ref.children,
      classNameProp = _ref.className;
  return _react.default.createElement("li", {
    className: (0, _clsx.default)('zep-list__item', variant === 'attribute' && 'zep-list__item--attribute', classNameProp)
  }, variant === 'attribute' && label && _react.default.createElement("span", {
    className: "zep-list__label"
  }, label), children);
};

process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  classNames: _propTypes.default.object,
  label: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['bullet', 'attribute'])
} : void 0;
var _default = ListItem;
exports.default = _default;