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
  d: "M6.667 28h18.667v-2.667H6.667V28zm18.666-14.667H20v-8h-8v8H6.667L16 22.666l9.333-9.333z"
})), 'ZepiconsDownload');

exports.default = _default;