"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function TableRow(_ref) {
  var children = _ref.children,
      color = _ref.color,
      classNameProp = _ref.className;
  var className = (0, _clsx.default)('zep-table__row', color === 'white' && 'zep-table__row--white', color === 'gray' && 'zep-table__row--gray', classNameProp);
  return _react.default.createElement("tr", {
    className: className
  }, children);
}

process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  color: _propTypes.default.oneOf(['white', 'gray'])
} : void 0;
TableRow.defaultProps = {
  color: 'white'
};
var _default = TableRow;
exports.default = _default;