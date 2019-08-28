import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var List = function List(_ref) {
  var variantProp = _ref.variant,
      classNameProp = _ref.className,
      childrenProp = _ref.children,
      other = _objectWithoutProperties(_ref, ["variant", "className", "children"]);

  var variant = variantProp || 'bullet';
  var children = React.Children.map(childrenProp, function (child) {
    return React.cloneElement(child, {
      variant: variant
    });
  });
  return React.createElement("ul", _extends({
    className: clsx('zep-list', classNameProp)
  }, other), children);
};

process.env.NODE_ENV !== "production" ? List.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  variant: PropTypes.oneOf(['bullet', 'attribute'])
} : void 0;
export default List;