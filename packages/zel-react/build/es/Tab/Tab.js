import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Tab = (_ref) => {
  let {
    className: classNameProp,
    label,
    size,
    onClick,
    icon,
    value,
    selected
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["className", "label", "size", "onClick", "icon", "value", "selected"]);

  const iconStyled = icon ? React.cloneElement(icon, {
    className: 'zep-tab__icon'
  }) : null;
  return React.createElement("div", _extends({
    className: "zep-tabs__item"
  }, other), React.createElement("button", {
    className: clsx('zep-tab', classNameProp, selected && 'zep-tab--selected', size === 'small' && 'zep-tab--small'),
    onClick: () => onClick(value),
    role: "tab",
    "aria-selected": selected,
    id: `tab-${value}`,
    tabIndex: 0
  }, iconStyled, label));
};

process.env.NODE_ENV !== "production" ? Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  value: PropTypes.number,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small'])
} : void 0;
export default Tab;