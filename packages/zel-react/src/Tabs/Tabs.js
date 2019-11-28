import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Tabs = ({
  className: classNameProp,
  children: childrenProp,
  onClick,
  ariaLabel,
  value,
  size,
  ...other
}) => {
  const valueToIndex = new Map();
  let childIndex = 0;
  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;
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

  return (
    <div
      className={clsx(classNameProp, 'zep-tabs')}
      data-testid="tabs"
      role="tablist"
      aria-label={ariaLabel}
      {...other}
    >
      {children}
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.number,
  ariaLabel: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large'])
};

export default Tabs;
