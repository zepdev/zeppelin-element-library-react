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

function IconButton(_ref) {
  var classNameProp = _ref.className,
      childrenProp = _ref.children,
      variant = _ref.variant,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "variant"]);
  var children = childrenProp ? _react.default.cloneElement(childrenProp, {
    className: (0, _clsx.default)('zep-button__icon', childrenProp.props.className)
  }) : null;
  return _react.default.createElement("button", (0, _extends2.default)({
    className: (0, _clsx.default)('zep-button zep-button-icon', variant === 'primary' && 'zep-button-primary', variant === 'secondary' && 'zep-button-secondary', classNameProp)
  }, other), children);
}

process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  children: _propTypes.default.object.isRequired,
  variant: _propTypes.default.oneOf(['primary', 'secondary'])
} : void 0;
var _default = IconButton;
exports.default = _default;