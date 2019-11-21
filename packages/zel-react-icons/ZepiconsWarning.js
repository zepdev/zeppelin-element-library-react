"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M1.333 28h29.333L15.999 2.667 1.332 28zm16-4h-2.667v-2.667h2.667V24zm0-5.333h-2.667v-5.333h2.667v5.333z"
}), 'ZepiconsWarning');

exports.default = _default;