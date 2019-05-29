"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function GridRow(_ref) {
  var children = _ref.children,
      classNameProp = _ref.className,
      align = _ref.align;
  var className = (0, _clsx.default)('zep-grid__row', align !== undefined && "zep-grid__row--align-items-".concat(align), classNameProp);
  return _react.default.createElement("div", {
    className: className
  }, children);
}

process.env.NODE_ENV !== "production" ? GridRow.propTypes = {
  children: _propTypes.default.array,
  align: _propTypes.default.oneOf(['stretch', 'flex-end', 'center', 'flex-start', 'baseline'])
} : void 0;
GridRow.defaultProps = {
  align: 'stretch'
};
var _default = GridRow;
exports.default = _default;