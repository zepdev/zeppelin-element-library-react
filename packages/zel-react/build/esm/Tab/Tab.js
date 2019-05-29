import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var Tab = function Tab(_ref) {
  var classNameProp = _ref.className,
      label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      _onClick = _ref.onClick,
      icon = _ref.icon,
      value = _ref.value,
      selected = _ref.selected;
  var iconStyled = icon ? React.cloneElement(icon, {
    className: 'zep-tab__icon'
  }) : null;
  return React.createElement("div", {
    className: "zep-tabs__item"
  }, React.createElement("button", {
    className: clsx('zep-tab', classNameProp, selected && 'zep-tab--selected', size === 'small' && 'zep-tab--small'),
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
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small']),
  variant: PropTypes.oneOf(['icon']),
  onClick: PropTypes.func,
  icon: PropTypes.object,
  value: PropTypes.number,
  selected: PropTypes.bool
} : void 0;
export default Tab;