"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var Tabs = function Tabs(_ref) {
  var classNameProp = _ref.className,
      childrenProp = _ref.children,
      onClick = _ref.onClick,
      ariaLabel = _ref.ariaLabel,
      value = _ref.value;
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
      value: childValue
    });
  });

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classNameProp, 'zep-tabs'),
    "data-testid": "tabs",
    role: "tablist",
    "aria-label": ariaLabel
  }, children);
};

process.env.NODE_ENV !== "production" ? Tabs.propTypes = {
  children: _propTypes.default.array.isRequired,
  onClick: _propTypes.default.func,
  value: _propTypes.default.number,
  ariaLabel: _propTypes.default.string
} : void 0;
var _default = Tabs;
exports.default = _default;