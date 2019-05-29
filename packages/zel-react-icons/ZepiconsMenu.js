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
  d: "M4 8h24v2.667H4V8zm0 6.667h24v2.667H4v-2.667zm0 6.666h24V24H4v-2.667z"
})), 'ZepiconsMenu');

exports.default = _default;