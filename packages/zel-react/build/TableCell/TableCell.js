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

function TableCell(_ref) {
  var children = _ref.children,
      component = _ref.component,
      classNameProp = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "component", "className"]);
  var Component = component || 'td';
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)('zep-table__cell', classNameProp)
  }, other), children);
}

process.env.NODE_ENV !== "production" ? TableCell.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.any]),
  className: _propTypes.default.string,
  component: _propTypes.default.oneOf(['th', 'td'])
} : void 0;
var _default = TableCell;
exports.default = _default;