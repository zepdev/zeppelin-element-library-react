import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var List = function List(_ref) {
  var variantProp = _ref.variant,
      classNameProp = _ref.className,
      childrenProp = _ref.children;
  var variant = variantProp || 'bullet';
  var children = React.Children.map(childrenProp, function (child) {
    return React.cloneElement(child, {
      variant: variant
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