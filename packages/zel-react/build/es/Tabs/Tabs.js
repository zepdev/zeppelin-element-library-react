import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Tabs = ({
  className: classNameProp,
  children: childrenProp,
  onClick,
  ariaLabel,
  value
}) => {
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