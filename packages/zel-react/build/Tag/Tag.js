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

var _ZepiconsClose = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsClose"));

var _ref2 = _react.default.createElement(_ZepiconsClose.default, {
  className: "zep-tag__icon"
});

var Tag = function Tag(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children,
      onClose = _ref.onClose,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "onClose"]);
  return _react.default.createElement("span", (0, _extends2.default)({
    className: (0, _clsx.default)(classNameProp, 'zep-tag')
  }, other), children, _react.default.createElement("button", {
    onClose: onClose,
    "aria-label": "close",
    className: "zep-tag__button"
  }, _ref2));
};

process.env.NODE_ENV !== "production" ? Tag.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  children: _propTypes.default.string
} : void 0;
var _default = Tag;
exports.default = _default;