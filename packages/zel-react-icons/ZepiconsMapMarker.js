"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  transform: "scale(Infinity, Infinity)",
  d: "M16 15.333c-1.841 0-3.333-1.492-3.333-3.333 0-.884.351-1.732.976-2.357s1.473-.976 2.357-.976c1.841 0 3.333 1.492 3.333 3.333 0 .884-.351 1.732-.976 2.357s-1.473.976-2.357.976zm0-12.666c-5.155 0-9.333 4.179-9.333 9.333C6.667 19 16 29.333 16 29.333S25.333 19 25.333 12c0-5.155-4.179-9.333-9.333-9.333z"
})), 'ZepiconsMapMarker');

exports.default = _default;