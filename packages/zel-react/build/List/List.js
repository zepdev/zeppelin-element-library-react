"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var List = function List(_ref) {
  var variantProp = _ref.variant,
      classNameProp = _ref.className,
      childrenProp = _ref.children;
  var variant = variantProp || 'bullet';

  var children = _react.default.Children.map(childrenProp, function (child) {
    return _react.default.cloneElement(child, {
      variant: variant
    });
  });

  return _react.default.createElement("ul", {
    className: (0, _clsx.default)('zep-list', classNameProp)
  }, children);
};

process.env.NODE_ENV !== "production" ? List.propTypes = {
  className: _propTypes.default.object,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  variant: _propTypes.default.oneOf(['bullet', 'attribute'])
} : void 0;
var _default = List;
exports.default = _default;