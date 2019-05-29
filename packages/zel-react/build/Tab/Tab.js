"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var Tab = function Tab(_ref) {
  var classNameProp = _ref.className,
      label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      _onClick = _ref.onClick,
      icon = _ref.icon,
      value = _ref.value,
      selected = _ref.selected;
  var iconStyled = icon ? _react.default.cloneElement(icon, {
    className: 'zep-tab__icon'
  }) : null;
  return _react.default.createElement("div", {
    className: "zep-tabs__item"
  }, _react.default.createElement("button", {
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
  size: _propTypes.default.oneOf(['small']),
  variant: _propTypes.default.oneOf(['icon']),
  onClick: _propTypes.default.func,
  icon: _propTypes.default.object,
  value: _propTypes.default.number,
  selected: _propTypes.default.bool
} : void 0;
var _default = Tab;
exports.default = _default;