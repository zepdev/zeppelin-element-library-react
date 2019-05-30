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

function GridContainer(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "children"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)('zep-grid', classNameProp)
  }, other), children);
}

process.env.NODE_ENV !== "production" ? GridContainer.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  children: _propTypes.default.any.isRequired
} : void 0;
var _default = GridContainer;
exports.default = _default;