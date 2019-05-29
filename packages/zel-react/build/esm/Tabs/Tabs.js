import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var Tabs = function Tabs(_ref) {
  var classNameProp = _ref.className,
      childrenProp = _ref.children,
      onClick = _ref.onClick,
      ariaLabel = _ref.ariaLabel,
      value = _ref.value;
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
      value: childValue
    });
  });
  return React.createElement("div", {
    className: classnames(classNameProp, 'zep-tabs'),
    "data-testid": "tabs",
    role: "tablist",
    "aria-label": ariaLabel
  }, children);
};

process.env.NODE_ENV !== "production" ? Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.number,
  ariaLabel: PropTypes.string
} : void 0;
export default Tabs;