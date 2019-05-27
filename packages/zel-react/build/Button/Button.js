"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function Button(_ref, ref) {
  var childrenProp = _ref.children,
      classNameProp = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className", "onClick", "color", "disabled", "fullWidth", "size"]);
  var className = (0, _clsx["default"])("zep-button", color === "primary" && "zep-button-primary", color === "secondary" && "zep-button-secondary", color === "tertiary" && "zep-button-tertiary", fullWidth && "zep-button--full", size === "small" && "zep-button--small", classNameProp); // const childrenIcon = childrenProp.filter(elem => typeof elem !== "string")[0];
  // const childrenIconTertiary = childrenIcon
  //   ? React.cloneElement(childrenIcon, {
  //       className: clsx(
  //         "zep-button__icon zep-button__icon-tertiary",
  //         childrenIcon.props.className
  //       )
  //     })
  //   : null;
  // const childrenText = childrenProp.filter(elem => typeof elem === "string");

  return _react["default"].createElement("button", (0, _extends2["default"])({
    className: className,
    disabled: disabled,
    onClick: disabled ? null : onClick,
    ref: ref
  }, props), color === "tertiary" && childrenIconTertiary, _react["default"].createElement("span", {
    className: (0, _clsx["default"])("zep-button__text", color === "tertiary" && "zep-button__text--tertiary")
  }, childrenProp));
}

process.env.NODE_ENV !== "production" ? Button.propTypes = {
  fullWidth: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node.isRequired,
  disabled: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["primary", "secondary", "tertiary"]),
  size: _propTypes["default"].oneOf(["small", "large"])
} : void 0;
Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: "large"
};

var _default = _react["default"].forwardRef(Button);

exports["default"] = _default;