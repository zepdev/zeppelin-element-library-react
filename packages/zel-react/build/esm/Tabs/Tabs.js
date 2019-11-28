import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var Tabs = function Tabs(_ref) {
  var classNameProp = _ref.className,
      childrenProp = _ref.children,
      onClick = _ref.onClick,
      ariaLabel = _ref.ariaLabel,
      value = _ref.value,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ["className", "children", "onClick", "ariaLabel", "value", "size"]);

  var valueToIndex = new Map();
  var childIndex = 0;
  var children = React.Children.map(childrenProp, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return React.cloneElement(child, {
      selected: selected,
      onClick: onClick,
      size: size,
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