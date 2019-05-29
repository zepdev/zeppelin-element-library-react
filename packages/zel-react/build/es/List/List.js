import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const List = ({
  variant: variantProp,
  className: classNameProp,
  children: childrenProp
}) => {
  const variant = variantProp || 'bullet';
  const children = React.Children.map(childrenProp, child => {
    return React.cloneElement(child, {
      variant
    });
  });
  return React.createElement("ul", {
    className: clsx('zep-list', classNameProp)
  }, children);
};

process.env.NODE_ENV !== "production" ? List.propTypes = {
  className: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  variant: PropTypes.oneOf(['bullet', 'attribute'])
} : void 0;
export default List;