import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const List = (_ref) => {
  let {
    variant: variantProp,
    className: classNameProp,
    children: childrenProp
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["variant", "className", "children"]);

  const variant = variantProp || 'bullet';
  const children = React.Children.map(childrenProp, child => {
    return React.cloneElement(child, {
      variant
    });
  });
  return React.createElement("ul", _extends({
    className: clsx('zep-list', classNameProp)
  }, other), children);
};

process.env.NODE_ENV !== "production" ? List.propTypes = {
  className: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  variant: PropTypes.oneOf(['bullet', 'attribute'])
} : void 0;
export default List;