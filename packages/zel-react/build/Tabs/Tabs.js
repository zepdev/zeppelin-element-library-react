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

var Tabs = function Tabs(_ref) {
  var classNameProp = _ref.className,
      childrenProp = _ref.children,
      onClick = _ref.onClick,
      ariaLabel = _ref.ariaLabel,
      value = _ref.value,
      size = _ref.size,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "onClick", "ariaLabel", "value", "size"]);
  var valueToIndex = new Map();
  var childIndex = 0;

  var children = _react.default.Children.map(childrenProp, function (child) {
    if (!_react.default.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return _react.default.cloneElement(child, {
      selected: selected,
      onClick: onClick,
      size: size,
      value: childValue
    });
  });

  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classNameProp, 'zep-tabs'),
    "data-testid": "tabs",
    role: "tablist",
    "aria-label": ariaLabel
  }, other), children);
};

process.env.NODE_ENV !== "production" ? Tabs.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  children: _propTypes.default.array.isRequired,
  onClick: _propTypes.default.func,
  value: _propTypes.default.number,
  ariaLabel: _propTypes.default.string.isRequired,
  size: _propTypes.default.oneOf(['small', 'large'])
} : void 0;
var _default = Tabs;
exports.default = _default;