"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var Notification = function Notification(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _clsx.default)('zep-notification', variant !== null && "zep-notification--".concat(variant), classNameProp)
  }, children);
};

process.env.NODE_ENV !== "production" ? Notification.propTypes = {
  className: _propTypes.default.object,
  children: _propTypes.default.array,
  variant: _propTypes.default.oneOf(['success', 'info', 'warning', 'danger'])
} : void 0;
var _default = Notification;
exports.default = _default;