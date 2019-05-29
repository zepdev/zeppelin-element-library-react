"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function TableHeader(_ref) {
  var childrenProp = _ref.children,
      classNameProp = _ref.className;

  var children = _react.default.Children.map(childrenProp, function (child) {
    if (!_react.default.isValidElement(child)) {
      return null;
    }

    return _react.default.cloneElement(child, {
      className: (0, _clsx.default)('zep-table__cell--header', child.props.className),
      scope: 'col',
      component: 'th'
    });
  });

  return _react.default.createElement("thead", null, _react.default.createElement("tr", {
    className: (0, _clsx.default)('zep-table__row zep-table__row--header', classNameProp)
  }, children));
}

process.env.NODE_ENV !== "production" ? TableHeader.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  className: _propTypes.default.string
} : void 0;
var _default = TableHeader;
exports.default = _default;