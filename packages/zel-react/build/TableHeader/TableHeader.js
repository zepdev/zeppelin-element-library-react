"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function TableHeader(_ref) {
  var childrenProp = _ref.children,
      classNameProp = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);

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

  return _react.default.createElement("thead", other, _react.default.createElement("tr", {
    className: (0, _clsx.default)('zep-table__row zep-table__row--header', classNameProp)
  }, children));
}

process.env.NODE_ENV !== "production" ? TableHeader.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
} : void 0;
var _default = TableHeader;
exports.default = _default;