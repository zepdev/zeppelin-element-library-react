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
  d: "M8 17.333h16v-2.667H8v2.667zM4 8v2.667h24V8H4zm9.333 16h5.333v-2.667h-5.333V24z"
})), 'ZepiconsFilter');

exports.default = _default;