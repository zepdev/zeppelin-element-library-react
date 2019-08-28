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
  d: "M13.333 28v-8h5.333v8h6.667V17.333h4L16 5.333l-13.333 12h4V28z"
})), 'ZepiconsHome');

exports.default = _default;