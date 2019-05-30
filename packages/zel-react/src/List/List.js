import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const List = ({
  variant: variantProp,
  className: classNameProp,
  children: childrenProp,
  ...other
}) => {
  const variant = variantProp || 'bullet';
  const children = React.Children.map(childrenProp, child => {
    return React.cloneElement(child, {
      variant
    });
  });

  return (
    <ul className={clsx('zep-list', classNameProp)} {...other}>
      {children}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  variant: PropTypes.oneOf(['bullet', 'attribute'])
};

export default List;
