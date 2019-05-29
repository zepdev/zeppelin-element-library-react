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

function Button(_ref) {
  var childrenProp = _ref.children,
      classNameProp = _ref.className,
      onClick = _ref.onClick,
      variant = _ref.variant,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "onClick", "variant", "disabled", "fullWidth", "size"]);
  var className = (0, _clsx.default)('zep-button', variant === 'primary' && 'zep-button-primary', variant === 'secondary' && 'zep-button-secondary', variant === 'tertiary' && 'zep-button-tertiary', fullWidth && 'zep-button--full', size === 'small' && 'zep-button--small', classNameProp);
  var isString = typeof childrenProp === 'string';
  var childrenIcon = isString ? null : childrenProp.filter(function (elem) {
    return typeof elem !== 'string';
  })[0];
  var childrenIconTertiary = childrenIcon ? _react.default.cloneElement(childrenIcon, {
    className: (0, _clsx.default)('zep-button__icon zep-button__icon--tertiary', childrenIcon.props.className)
  }) : null;
  var childrenText = isString ? childrenProp : childrenProp.filter(function (elem) {
    return typeof elem === 'string';
  });
  return _react.default.createElement("button", (0, _extends2.default)({
    className: className,
    disabled: disabled,
    onClick: disabled ? null : onClick
  }, props), variant === 'tertiary' && childrenIconTertiary, _react.default.createElement("span", {
    className: (0, _clsx.default)('zep-button__text', variant === 'tertiary' && 'zep-button__text--tertiary')
  }, childrenText));
}

process.env.NODE_ENV !== "production" ? Button.propTypes = {
  fullWidth: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
  size: _propTypes.default.oneOf(['small', 'large'])
} : void 0;
Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: 'large'
};
var _default = Button;
exports.default = _default;