"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function TableBody(_ref) {
  var children = _ref.children,
      classNameProp = _ref.className;
  return _react.default.createElement("tbody", {
    className: classNameProp
  }, children);
}

process.env.NODE_ENV !== "production" ? TableBody.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  className: _propTypes.default.string
} : void 0;
var _default = TableBody;
exports.default = _default;