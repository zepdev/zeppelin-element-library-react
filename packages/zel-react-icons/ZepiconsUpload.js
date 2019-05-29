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
  d: "M12 22.667v-8H6.667L16 5.334l9.333 9.333H20v8h-8zM6.667 28v-2.667h18.667V28H6.667z"
})), 'ZepiconsUpload');

exports.default = _default;