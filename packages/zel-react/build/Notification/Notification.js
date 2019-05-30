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

var Notification = function Notification(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "variant"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)('zep-notification', variant !== null && "zep-notification--".concat(variant), classNameProp)
  }, other), children);
};

process.env.NODE_ENV !== "production" ? Notification.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]).isRequired,
  variant: _propTypes.default.oneOf(['success', 'info', 'warning', 'danger'])
} : void 0;
var _default = Notification;
exports.default = _default;