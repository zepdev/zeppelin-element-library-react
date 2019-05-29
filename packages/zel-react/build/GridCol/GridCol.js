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

function GridCol(_ref) {
  var children = _ref.children,
      classNameProp = _ref.className,
      align = _ref.align,
      xxs = _ref.xxs,
      xs = _ref.xs,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "align", "xxs", "xs", "s", "m", "l", "xl"]);
  var className = (0, _clsx.default)('zep-grid__col', align !== undefined && "zep-grid__col--align-self-".concat(align), xxs !== undefined && "zep-grid__col--xxs-".concat(String(xxs), "-4"), xs !== undefined && "zep-grid__col--xs-".concat(String(xs), "-6"), s !== undefined && "zep-grid__col--s-".concat(String(s), "-6"), m !== undefined && "zep-grid__col--m-".concat(String(m), "-8"), l !== undefined && "zep-grid__col--l-".concat(String(l), "-12"), xl !== undefined && "zep-grid__col--xl-".concat(String(l), "-12"), classNameProp);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: className
  }, other), children);
}

process.env.NODE_ENV !== "production" ? GridCol.propTypes = {
  align: _propTypes.default.oneOf(['stretch', 'flex-end', 'center', 'flex-start', 'baseline']),
  xxs: _propTypes.default.oneOf([1, 2, 3, 4]),
  xs: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6]),
  s: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6]),
  m: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  l: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
} : void 0;
var _default = GridCol;
exports.default = _default;