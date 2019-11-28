import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Tabs = (_ref) => {
  let {
    className: classNameProp,
    children: childrenProp,
    onClick,
    ariaLabel,
    value,
    size
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["className", "children", "onClick", "ariaLabel", "value", "size"]);

  const valueToIndex = new Map();
  let childIndex = 0;
  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return React.cloneElement(child, {
      selected,
      onClick,
      size,
      value: childValue
    });
  });
  return React.createElement("div", _extends({
    className: clsx(classNameProp, 'zep-tabs'),
    "data-testid": "tabs",
    role: "tablist",
    "aria-label": ariaLabel
  }, other), children);
};

process.env.NODE_ENV !== "production" ? Tabs.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.number,
  ariaLabel: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large'])
} : void 0;
export default Tabs;