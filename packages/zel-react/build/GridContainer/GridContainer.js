"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function GridContainer(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _clsx.default)('zep-grid', classNameProp)
  }, children);
}

process.env.NODE_ENV !== "production" ? GridContainer.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string])
} : void 0;
var _default = GridContainer;
exports.default = _default;