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

function Table(_ref) {
  var children = _ref.children,
      title = _ref.title,
      classNameProp = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "title", "className"]);
  return _react.default.createElement("table", (0, _extends2.default)({
    className: (0, _clsx.default)('zep-table', classNameProp)
  }, other), _react.default.createElement("caption", {
    className: "zep-visually-hidden"
  }, title), children);
}

process.env.NODE_ENV !== "production" ? Table.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  title: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
} : void 0;
var _default = Table;
exports.default = _default;