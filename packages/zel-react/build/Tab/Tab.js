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

var Tab = function Tab(_ref) {
  var classNameProp = _ref.className,
      label = _ref.label,
      size = _ref.size,
      _onClick = _ref.onClick,
      icon = _ref.icon,
      value = _ref.value,
      selected = _ref.selected,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "label", "size", "onClick", "icon", "value", "selected"]);
  var iconStyled = icon ? _react.default.cloneElement(icon, {
    className: 'zep-tab__icon'
  }) : null;
  return _react.default.createElement("div", (0, _extends2.default)({
    className: "zep-tabs__item"
  }, other), _react.default.createElement("button", {
    className: (0, _clsx.default)('zep-tab', classNameProp, selected && 'zep-tab--selected', size === 'small' && 'zep-tab--small'),
    onClick: function onClick() {
      return _onClick(value);
    },
    role: "tab",
    "aria-selected": selected,
    id: "tab-".concat(value),
    tabIndex: 0
  }, iconStyled, label));
};

process.env.NODE_ENV !== "production" ? Tab.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  icon: _propTypes.default.object,
  value: _propTypes.default.number,
  selected: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small'])
} : void 0;
var _default = Tab;
exports.default = _default;